import User from '@/app/models/User';
import mongoose from 'mongoose';
import { NextResponse, NextRequest } from 'next/server';

interface Link {
  url: string;
  platform: string;
}

interface NewUserRequest {
  userId: mongoose.Types.ObjectId;
  links: Link[];
}

interface NewUserResponse {
  id: mongoose.Types.ObjectId;
  email: string;
  password?: string;
}

type NewResponse = NextResponse<{
  user?: NewUserResponse;
  error?: string;
  status?: Number;
}>;

export async function POST(req: NextRequest) {
  try {
    const { userId, links } = (await req.json()) as NewUserRequest;

    console.log('server', { userId, links });
    // Find the user by userId
    const user = await User.findById(userId);

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    await User.findByIdAndUpdate(userId, { links });

    return NextResponse.json({
      status: 201,
      error: 'Links added successfully',
      user,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 500, message: 'Internal Server Error' });
  }
}
