'use client';

import React, { FormEvent } from 'react';
import Links from '../Links/Links';
import Profile from '../Profile/Profile';
import { useAppSelector } from '@/store/store';
import SaveButton from '../shared/SaveButton';

const Main = () => {
  const currentPage = useAppSelector((state) => state.ui.currentPage);

  const handleSubmitLinks = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('links submited')
  };

  const handleSubmitProfile = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('profile data submited')
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
          <form
            id='links-form'
            onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmitLinks(e)}
          >
            <Links />
          </form>
        ) : (
            <form
              id='profile-form'
              onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmitProfile(e)}
          >
              {/* <Profile /> */}
              <div>profile</div>
          </form>
        )}
      </div>

      <div className="h-[5.875rem] border-t-[2px] border-t-lines">
        <SaveButton />
      </div>
    </div>
  );
};

export default Main;

// <button
//   type="submit"
//   form={currentPage === 'LINKS' ? 'links-form' : 'profile-form'}
// ></button>
