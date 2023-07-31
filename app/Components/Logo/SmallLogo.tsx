'use client';

import Image from 'next/image';

const SmallLogo = () => {
  return (
    <div>
      <Image src="/images/logo-small.svg" width={32} height={32} alt="logo" />
    </div>
  );
};

export default SmallLogo;
