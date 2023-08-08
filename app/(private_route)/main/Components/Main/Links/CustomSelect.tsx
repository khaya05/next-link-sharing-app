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
    <LightGrayCard>
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
      />
    </LightGrayCard>
  );
};

export default CustomSelect;
