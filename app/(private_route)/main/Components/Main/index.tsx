'use client';

import { useAppSelector } from '@/store/store';
import Links from './Links/Links';
import Profile from './Profile/Profile';
import SaveButton from './shared/SaveButton';

const Main = () => {
  const currentPage = useAppSelector((state) => state.ui.currentPage);

  return (
    <div
      className="
        bg-white
        h-full
        w-full
        rounded-[12px]
    "
    >
      <div className="border h-[88.6%]">
        {currentPage === 'LINKS' ? <Links /> : <Profile />}
      </div>

      <div className="h-[11.4%]">
        <SaveButton />
      </div>
    </div>
  );
};

export default Main;
