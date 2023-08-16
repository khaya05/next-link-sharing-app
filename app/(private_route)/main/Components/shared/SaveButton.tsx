'use client';

import {useAppSelector } from '@/store/store';
import { useMemo } from 'react';

const SaveButton = () => {
  const currentPage = useAppSelector((state) => state.ui.currentPage);
  const form = useMemo(
    () => (currentPage === 'LINKS' ? 'links-form' : 'profile-form'),
    [currentPage]
  );

  return (
    <div
      className="
        relative
        md:my-6
        h-full
    "
    >
      <button
        type="submit"
        form={form}
        className="
          h-[2.875rem]
          w-[5.6875rem]
          rounded-[8px]
          bg-purple
          text-white
          absolute

          right-[2.5rem]
          hover:bg-purple-hover
          hover:cursor-pointer
        "
      >
        Save
      </button>
    </div>
  );
};

export default SaveButton;
