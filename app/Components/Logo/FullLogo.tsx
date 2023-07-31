'use client';

import Image from 'next/image';

const DesktopLogo = () => {
  return (
    <div>
      <Image
        src="/images/logo-large.svg"
        width={182.5}
        height={40}
        alt="logo"
      />
    </div>
  );
};

export default DesktopLogo;
