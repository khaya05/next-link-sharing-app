import React from 'react';

const ProfilePic = () => {
  return (
    <div className="bg-light-gray p-5 rounded-xl text-gray flex items-center justify-between mb-8 mt-10">
      <p>Profile picture</p>
      <div className="flex gap-6 items-center w-[62%]">
        <div className="w-[193px] h-[193px] bg-light-purple rounded-xl"></div>
        <p className="text-[12px] min-w-[13.5rem]">
          Image must be below 1024x1024px.{' '}
          <span className="block">Use PNG or JPG format.</span>
        </p>
      </div>
    </div>
  );
};

export default ProfilePic;
