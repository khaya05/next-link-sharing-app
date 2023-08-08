'use client'

import React from 'react';
import Links from './Links/Links';
import Profile from './Profile/Profile';
import {useAppSelector} from '@/store/store'

const Main = () => {
  const currentPage = useAppSelector((state) => state.ui.currentPage);

  const handleSubmitLinks = () => {
    // Handle form submission for Links section
    // event.preventDefault();
    // ... handle saving links
  };

  const handleSubmitProfile = () => {
    // Handle form submission for Profile section
    // event.preventDefault();
    // ... handle saving profile data
  };

  return (
    <div
      className="
        bg-white
        h-full
        w-full
        rounded-[12px]
    "
    >
      <div className="h-[88.6%]">
        {currentPage === 'LINKS' ? (
          <form onSubmit={handleSubmitLinks}>
            <Links />
          </form>
        ) : (
          <form onSubmit={handleSubmitProfile}>
            <Profile />
          </form>
        )}
      </div>

      <div className="h-[5.875rem] border-t-[2px] border-t-lines">
        <button
          type="submit"
          form={currentPage === 'LINKS' ? 'links-form' : 'profile-form'}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Main;
