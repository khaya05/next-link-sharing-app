import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="h-full grid place-items-center">
      <Link href="/login">Login</Link>
    </main>
  );
}
