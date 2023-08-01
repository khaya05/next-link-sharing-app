'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useMemo, useState } from 'react';

interface InputProps {
  name: string;
  type: string;
  icon: string;
  label: string;
  placeholder: string;
  error?: string;
  required?: boolean;
  register: any;
  errors: any;
}

const InputWithIcon: React.FC<InputProps> = ({
  name,
  type,
  icon,
  label,
  placeholder,
  error,
  required,
  register,
  errors,
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const formError = useMemo(() => (errors.name ? true : false), [errors]);
  console.log('formError', formError)
  console.log('errors', errors)

  return (
    <div>
      <label
        htmlFor="name"
        className="text-xs leading-[1.125rem] text-dark-gray "
      >
        {label}
      </label>
      <div
        className={clsx(
          'border',
          'border-lines',
          'px-7',
          'py-3',
          'h-14',
          'mb-6',
          'w-full',
          'rounded-[8px]',
          'flex',
          'justify-between',
          'items-center',
          'input-container',
          !formError && 'hover:border-0',
          !formError && 'hover:ring-[1px]',
          !formError && 'hover:ring-purple-hover',
          isFocus &&
            'border-0 ring-[1px] ring-purple input-box-shadow shadow-xl shadow-purple/20',
          isFocus && formError && 'border-0 ring-[1px] ring-red shadow-none'
        )}
      >
        <div className="flex justify-between items-center gap-3 w-full | second-container">
          <div>
            <Image src={icon} width={16} height={16} alt="icon" />
          </div>
          <input
            type={type}
            id={name}
            placeholder={placeholder}
            required={required}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            {...register(name)}
            className={clsx(
              'text-base',
              'caret-purple',
              'leading-[1.5rem]',
              'text-dark-gray',
              'focus:border-none',
              'focus:outline-none',
              !formError && 'w-full',
              formError && 'w-[95%]',
              formError && 'text-red',
              formError && 'caret-red',
              'form-input'
            )}
          />
        </div>
        {errors.name && (
          <p
            className={clsx(
              'text-red',
              'text-[0.75rem]',
              'leading-[1.125rem]',
              'w-full',
              'text-right',
              !formError && 'hidden',
              formError && 'ml-3'
            )}
          >
            {errors.name.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default InputWithIcon;
