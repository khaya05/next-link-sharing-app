'use client';

import Image from 'next/image';
import LightGrayCard from '../shared/LightGrayCard';

export default function GetStarted() {
  return (
    <LightGrayCard>
      <Image
        width={15.59581 * 16}
        height={10 * 16}
        alt="illustration"
        src="/images/illustration-empty.svg"
        className="
          border
          mx-auto
        "
      />
      <h2 className='text-center text-[2rem] leading-[3rem] font-[600] text-dark-gray'>
        {"Let's get you started"}
      </h2>
      <p className='text-base text-gray text-center md:w-[30rem] mx-auto mt-6'>
        Use the “Add new link” button to get started. Once you have more than
        one link, you can reorder and edit them. We’re here to help you share
        your profiles with everyone!
      </p>
    </LightGrayCard>
  );
}
