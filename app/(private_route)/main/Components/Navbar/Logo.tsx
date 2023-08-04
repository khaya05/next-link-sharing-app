'use client';

import FullLogo from '@/app/Components/Logo/FullLogo';
import SmallLogo from '@/app/Components/Logo/SmallLogo';

const Logo = () => {
  return (
    <>
      <div className="hidden md:block">
        <FullLogo />
      </div>
      <div className="md:hidden">
        <SmallLogo />
      </div>
    </>
  );
};

export default Logo;
