'use client';

import { useMemo } from 'react';
import Logo from './Logo';
import NavButton from './NavButton';
import PreviewButton from './PreviewButton';
import { BiLink } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { setCurrentPage } from '@/store/ui-slice';

const Navbar = () => {
  const currentPage = useAppSelector((state) => state.ui.currentPage);
  const isLinksSelected = useMemo(() => currentPage === 'LINKS', [currentPage]);
  const dispatch = useAppDispatch();

  const showProfile = () => {
    dispatch(setCurrentPage('PROFILE'));
  };

  const showLinks = () => {
    dispatch(setCurrentPage('LINKS'));
  };

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
        <NavButton
          label="links"
          icon={BiLink}
          isSelected={isLinksSelected}
          onClick={showLinks}
        />
        <NavButton
          label="profile details"
          icon={CgProfile}
          isSelected={!isLinksSelected}
          onClick={showProfile}
        />
      </div>
      <PreviewButton />
    </nav>
  );
};

export default Navbar;
