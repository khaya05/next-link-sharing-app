'use client';

import clsx from 'clsx';
import { useState } from 'react';

interface Props {
  label: string;
  type: string;
  placeholder: string;
}

const ProfileInput: React.FC<Props> = ({ label, type, placeholder }) => {
  const [onFocus, setOnFocus] = useState(false);
  const isValid = !true;

  return (
    <div
      className="
        flex
        justify-between
        items-center
        h-12
      "
    >
      <div className="text-gray">{label}</div>
      <div
        className={clsx(
          'flex',
          'justify-between',
          'items-center',
          'border',
          'border-lines',
          'h-full',
          'w-[62%]',
          'rounded-[8px]',
          'px-4',
          isValid && 'hover:border-0',
          isValid && 'hover:ring-[1px]',
          isValid && 'hover:ring-purple-hover',
          isValid &&
            onFocus &&
            'border-0 ring-[1px] ring-purple input-box-shadow shadow-xl shadow-purple/20',
          onFocus && !isValid && 'border-0 ring-[1px] ring-red shadow-none'
        )}
      >
        <input
          type={type}
          placeholder={placeholder}
          onFocus={() => setOnFocus(true)}
          onBlur={() => setOnFocus(false)}
          required={true}
          className={clsx(
            "bg-inherit",
            "text-gray",
            "focus:border-none",
            "focus:outline-none",
            "caret-purple",
            !isValid && "caret-red"
          )}
        />
        <span
          className={clsx(
            'text-[12px]',
            'invisible',
            'text-red',
            !isValid && 'visible'
          )}
        >
          {"Can't be empty"}
        </span>
      </div>
    </div>
  );
};

export default ProfileInput;
