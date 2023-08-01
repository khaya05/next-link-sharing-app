'use client';
import { FcGoogle } from 'react-icons/fc';

export default function GoogleLogin() {
  return (
    <div>
      <div
        className="
          grid 
          place-items-center 
          border
          border-lines
          py-3
          mb-4
          rounded-[8px]
          hover:cursor-pointer 
          bg-light-gray 
          hover:bg-white
        "
      >
        <div className="flex gap-3 items-center px-3">
          <FcGoogle />
          <div className="text-gray">Log in with Google</div>
        </div>
      </div>
      <div className="flex w-full justify-between items-center mb-6">
        <div className="border-b border-lines w-full h-[1px]"></div>
        <div className="text-base px-3 text-gray">or</div>
        <div className="border-b border-lines w-full h-[1px]"></div>
      </div>
    </div>
  );
}
