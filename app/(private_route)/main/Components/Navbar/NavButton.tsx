'use client';

import clsx from 'clsx'
import { MouseEventHandler } from 'react';

interface Props {
  icon: string;
  label: string;
  isSelected: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
}


const LinksButton:React.FC<Props> = ({icon:Icon, label, isSelected, onClick}) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "flex",
        "items-center",
        "gap-2",
        "px-[1.69rem]",
        "py-[0.69rem]",
        "rounded-[8px]",
        "text-gray",
        "hover:cursor-pointer",
        "hover:text-purple",
        "hover:ring-[1px]",
        "hover:ring-purple",
        "hover:border-light-purple",
        isSelected && 'bg-light-purple',
        isSelected && 'text-purple'
    
      )}
    >
      <div className='w-[22px] h-[22px] grid place-items-center'>
        <Icon />
      </div>
      <span className="hidden capitalize font-[600] md:block">{label}</span>
    </div>
  );
}

export default LinksButton;
