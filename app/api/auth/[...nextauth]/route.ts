import bcrypt from 'bcrypt';
import NextAuth, { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import clientPromise from '@/app/libs/mongoAdapter';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import startDb from '@/app/libs/mongoAdapter';
import User from '@/models/User';

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  adapter: MongoDBAdapter(startDb),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),

    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        await startDb();

        const user = await User.findOne({ email });
        if (!user) throw Error('email/password mismatch');

        const passwordMatch = await user.comparePassword(password);
        if (!passwordMatch) throw Error('email/password mismatch');

        return {
          email: user.email,
          id: user._id,
        };
      },
    }),
  ],
  callbacks: {
    jwt(params: any) {
      if (params.user) {
        params.token.id = params.user.id;
      }
      // return final_token
      return params.token;
    },

    session({ session, token }) {
      if (session.user) {
        (session.user as { id: string }).id = token.id as string;
      }
      return session;
    },
  },
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
