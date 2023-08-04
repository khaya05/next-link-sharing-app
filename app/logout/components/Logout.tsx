'use client';

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Logout() {
  const { data, status } = useSession();
  console.log({ data });
  console.log({ status });

  const isAuth = status === 'authenticated';
  if (isAuth) {
    return (
      <p>
        {data?.user?.name} <button onClick={() => signOut()}> logout</button>
      </p>
    );
  }

  return <Link href="/login"> login</Link>;
}
