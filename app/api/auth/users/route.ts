import startDb from '@/app/libs/mongoAdapter';
import User from '@/models/User';
import { NextResponse } from 'next/server';

interface NewUserRequest {
  email: string;
  password: string;
}

interface NewUserResponse {
  id: string;
  email: string;
  password?: string;
}

type NewResponse = NextResponse<{ user?: NewUserResponse; error?: string }>;

export const POST = async (req: Request): Promise<NewResponse> => {
  const body = (await req.json()) as NewUserRequest;
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
};
