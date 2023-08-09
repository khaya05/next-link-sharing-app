'use client';

import Image from 'next/image';
import React, { ChangeEvent, useState } from 'react';
import Select from 'react-select';
import OptionTypeBase from 'react-select';
import InputWithIcon from '@/app/Components/Input/InputWithIcon_copy';
import LightGrayCard from '../shared/LightGrayCard';
import platformOptions from './platforms';

const CustomSelect: React.FC = () => {
  const handlePlatformChange = (selectedOption: OptionTypeBase) => {
    // Handle selected platform
    console.log('Selected Platform:', selectedOption);
  };

  const [link, setCurrentLink] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {};

  return (
    <div
      className="
        bg-light-gray
        p-5
        rounded-[12px]
      "
    >
      <div
        className="
          flex
          justify-between
          items-center
          text-gray
          text-base 
        "
      >
        <div
          className="
            flex
            gap-2
            items-center
            mb-3
        "
        >
          <Image
            width={16}
            height={16}
            src="/images/icon-drag-and-drop.svg"
            alt="icon"
          />
          <p className="font-bold">Link #1</p>
        </div>

        <button>Remove</button>
      </div>
      <p className="text-dark-gray leading-[1.125rem] text-[0.75rem]">
        Platform
      </p>
      <Select
        options={platformOptions}
        // onChange={handlePlatformChange}
        formatOptionLabel={({ value, label, icon }) => (
          <div className="flex gap-3 items-center">
            <Image
              width={16}
              height={16}
              src={`/images/icon-${icon || value}.svg`}
              alt="platform icon"
            />
            <span>{label}</span>
          </div>
        )}
      />

      <div className="mt-3">
        <InputWithIcon
          label="Link"
          name="link"
          error="can't be empty"
          type="text"
          placeholder="e.g. https://www.github.com/johnappleseed"
          icon="/images/icon-link.svg"
          value={link}
          isInputValid={true}
          onChange={handleChange}
          required={true}
        />
      </div>
    </div>
  );
};

export default CustomSelect;
