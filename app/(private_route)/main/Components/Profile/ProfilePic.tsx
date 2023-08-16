'use client';

import { useAppSelector } from '@/store/store';
import clsx from 'clsx';
import React, { ChangeEvent, useRef, useState } from 'react';
import { BsImage } from 'react-icons/bs';

const ProfilePic = () => {
  const { profilePic } = useAppSelector((state) => state.user);
  const [imageHover, setImageHover] = useState(false);
  const fileInputRef = useRef(null);

  const fileSelectedHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newProfile = e.target.files[0];
    console.log(newProfile);
  };

  const clickFileInput = () => {
    if (fileInputRef) {
      fileInputRef.current.click();
    }
  };

  return (
    <div
      className="
        bg-light-gray 
        p-5 
        rounded-xl 
        text-gray 
        flex 
        items-center 
        justify-between 
        mb-8 
        mt-10
      "
    >
      <p>Profile picture</p>

      <input
        type="file"
        className="hidden"
        ref={fileInputRef}
        onChange={(e) => fileSelectedHandler(e)}
      />

      <div className="flex gap-6 items-center w-[67%]">
        {profilePic === '' ? (
          <div
            onClick={clickFileInput}
            className="
            w-[193px] 
            h-[193px] 
            bg-light-purple 
            rounded-xl 
            text-purple 
            grid
            place-items-center
            hover:ring-[1px]
            hover:ring-purple
            hover:cursor-pointer
          "
          >
            <div className="flex flex-col items-center">
              <div className="w-[35px] h-[35px] grid place-items-center">
                <BsImage className="w-full h-full" />
              </div>
              <p className="font-[600] mt-1">+ Upload Image</p>
            </div>
          </div>
        ) : (
          <div
            onMouseEnter={() => setImageHover(true)}
            onMouseLeave={() => setImageHover(false)}
            onClick={clickFileInput}
            className={clsx(`
                w-[193px]
                h-[193px]
                rounded-xl
                bg-[url('/images/profile-pic.jpg')]
                bg-center
                bg-contain
                relative
                grid
                place-items-center
                hover:cursor-pointer
              `)}
          >
            <div
              className={clsx(
                'w-[193px]',
                'h-[193px]',
                'rounded-xl',
                'z-10',
                'absolute',
                imageHover && 'bg-black',
                imageHover && 'opacity-20'
              )}
            ></div>

            <div
              className={clsx(
                'text-white ',
                'relative ',
                'z-20 ',
                'flex ',
                'flex-col ',
                'items-center ',
                'justify-center',
                'opacity-0',
                imageHover && 'opacity-100'
              )}
            >
              <div className="w-[35px] h-[35px] grid place-items-center">
                <BsImage className="w-full h-full" />
              </div>
              <p className="font-[600] mt-1">Change image</p>
            </div>
          </div>
        )}
        <p className="text-[12px]">
          Image must be below 1024x1024px.{' '}
          <span className="block">Use PNG or JPG format.</span>
        </p>
      </div>
    </div>
  );
};

export default ProfilePic;
