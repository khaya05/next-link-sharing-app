'use client';

import Image from 'next/image';
import React, { ChangeEvent, MouseEventHandler, useState } from 'react';
import Select from 'react-select';
import OptionTypeBase from 'react-select';
import InputWithIcon from '@/app/Components/Input/InputWithIcon_copy';
import platformOptions from './platforms';
import { useAppDispatch } from '@/store/store';
import { removeLink, setPlatform, setLink } from '@/store/user-data-slice';

import './select.css';

interface Props {
  id: string;
  no: number;
}

const LinkInput: React.FC<Props> = ({ id, no }) => {
  const dispatch = useAppDispatch();
  const [url, setUrl] = useState('');

  const handlePlatformChange = (selectedOption: OptionTypeBase) => {
    const { value } = selectedOption;
    dispatch(setPlatform({ id, platform: value }));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>, id: string) => {
    e.preventDefault();
    const link = e.target.value;
    dispatch(setLink({ id, link }));
  };

  const handleRemoveLink = (linkId: string) => {
    dispatch(removeLink(linkId));
  };

  return (
    <div className="bg-light-gray p-5 rounded-[12px] mb-6">
      <div
        className="
          flex
          justify-between
          items-center
          text-gray
          text-base 
        "
      >
        <div className="flex gap-2 items-center mb-3">
          <Image
            width={16}
            height={16}
            src="/images/icon-drag-and-drop.svg"
            alt="icon"
          />
          <p className="font-bold">Link #{no}</p>
        </div>

        <button onClick={() => handleRemoveLink(id)}>Remove</button>
      </div>

      {/* dropdown */}

      <p className="text-dark-gray leading-[1.125rem] text-[0.75rem]">
        Platform
      </p>

      <Select
        options={platformOptions}
        onChange={handlePlatformChange}
        classNames={{
          control: (state) => (state.isFocused ? 'border-red' : 'border-gray'),
        }}
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

      {/* custom link input */}
      <div className="mt-3">
        <InputWithIcon
          label="Link"
          name="link"
          error="can't be empty"
          type="text"
          placeholder="e.g. https://www.github.com/johnappleseed"
          icon="/images/icon-link.svg"
          value={url}
          isInputValid={true}
          onChange={(e) => handleChange(e, id)}
          required={true}
        />
      </div>
    </div>
  );
};

export default LinkInput;
