import startDb from '@/app/libs/mongoAdapter';
import User from '@/app/models/User';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

interface NewUserRequest {
  email: string;
  password: string;
}

interface NewUserResponse {
  id: mongoose.Types.ObjectId;
  email: string;
  password?: string;
}

type NewResponse = NextResponse<{ user?: NewUserResponse; error?: string }>;

export const POST = async (req: Request): Promise<NewResponse> => {
  try {
    const body = (await req.json()) as NewUserRequest;

    console.log('sever', body)

    await startDb();

    const oldUser = await User.findOne({ email: body.email });
    if (oldUser) {
      return NextResponse.json(
        { error: 'email is already in use!' },
        { status: 422 }
      );
    }

    const user = await User.create({ ...body });

    return NextResponse.json({
      user: {
        id: user._id.toString(),
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error, 'ERROR_USER');
    return new NextResponse('Error', { status: 500 });
  }
};
