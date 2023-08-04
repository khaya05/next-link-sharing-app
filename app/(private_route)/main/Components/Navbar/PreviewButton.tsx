'use client';

import { BsEye } from 'react-icons/bs';

function PreviewButton() {
  return (
    <div
      className="
          rounded-[8px] 
          ring-[1px] 
          px-[1.69rem]
          py-[0.69rem]
          ring-purple 
          hover:bg-light-purple
          hover:cursor-pointer
      "
    >
      <div className="md:hidden text-purple font-[600] grid place-items-center w-[20px] h-[20px]">
        <BsEye />
      </div>
      <span
        className="
          hidden 
          md:block 
          text-purple 
          font-[600] 

        "
      >
        Preview
      </span>
    </div>
  );
}

export default PreviewButton;
