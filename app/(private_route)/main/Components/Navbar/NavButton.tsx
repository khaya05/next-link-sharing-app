'use client';

import Image from 'next/image';

interface Props {
  icon: string;
  label:string
}


const LinksButton:React.FC<Props> = ({icon:Icon, label}) => {
  return (
    <div
      className="
        flex
        items-center
        gap-2
        px-[1.69rem]
        py-[0.69rem]
        rounded-[8px]
        text-gray
        hover:cursor-pointer
        hover:text-purple
        hover:bg-light-purple
    "
    >
      <div className='w-[22px] h-[22px] grid place-items-center'>
        <Icon />
      </div>
      <span className="hidden capitalize font-[600] md:block">{label}</span>
    </div>
  );
}

export default LinksButton;
