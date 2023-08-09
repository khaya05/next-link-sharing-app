'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { ChangeEvent, FormEvent, useMemo, useRef, useState } from 'react';

interface InputProps {
  name: string;
  type: string;
  icon: string;
  label: string;
  placeholder: string;
  error?: string;
  required?: boolean;
  pattern?: string;
  value: any;
  isInputValid: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  // register: any;
  // errors: any;
}

const InputWithIcon: React.FC<InputProps> = ({
  name,
  type,
  icon,
  label,
  placeholder,
  error,
  required,
  value,
  onChange,
  pattern,
  isInputValid
  // register,
  // errors,
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const currentInput = useRef();

  const formError = false;

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
          // 'mb-6',
          'w-full',
          'rounded-[8px]',
          'flex',
          'justify-between',
          'items-center',
          'first-container',
          !formError && 'hover:border-0',
          !formError && 'hover:ring-[1px]',
          !formError && 'hover:ring-purple-hover',
          !formError &&
            isFocus &&
            'border-0 ring-[1px] ring-purple input-box-shadow shadow-xl shadow-purple/20',
          isFocus && !isInputValid && 'border-0 ring-[1px] ring-red shadow-none'
        )}
      >
        <div className="flex justify-between items-center gap-3 w-full | second-container">
          <div>
            <Image src={icon} width={16} height={16} alt="icon" />
          </div>
          <input
            type={type}
            id={name}
            name={name}
            placeholder={placeholder}
            required={required}
            pattern={pattern}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
            // focused={isFocus.toString()}
            value={value}
            className={clsx(
              'bg-inherit',
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
        {!isInputValid && (
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
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default InputWithIcon;
