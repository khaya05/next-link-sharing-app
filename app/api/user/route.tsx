import User from '@/app/models/User';
import mongoose from 'mongoose';
import { NextResponse, NextRequest } from 'next/server';

interface NewUserRequest {
  userId: mongoose.Types.ObjectId;
}

export async function GET(req: NextRequest) {
  try {
    const { userId } = (await req.json()) as NewUserRequest;

    console.log('server',  userId );
    // Find the user by userId
    const user = await User.findById(userId);

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({
      status: 200,
      user,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 500, message: 'Internal Server Error' });
  }
}
