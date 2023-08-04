'use client';

import LinksButton from './NavButton';
import Logo from './Logo';
import NavButton from './NavButton';
import PreviewButton from './PreviewButton';
import { BiLink } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';

const Navbar = () => {
  return (
    <nav
      className="
      bg-white 
        flex 
        justify-between 
        items-center
        rounded-[12px]
        md:h-[78px] 
        md:px-6
      "
    >
      <Logo />
      <div className="flex gap-4">
        <NavButton label="links" icon={ BiLink} />
        <NavButton  label='profile details' icon={CgProfile}/>
      </div>
      <PreviewButton />
    </nav>
  );
};

export default Navbar;
