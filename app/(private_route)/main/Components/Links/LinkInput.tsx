'use client';

import Image from 'next/image';
import React, { ChangeEvent, MouseEventHandler, useState } from 'react';
import Select from 'react-select';
import OptionTypeBase from 'react-select';
import InputWithIcon from '@/app/Components/Input/InputWithIcon_copy';
import platformOptions from './platforms';
import { useAppDispatch } from '@/store/store';
import { removeLink } from '@/store/user-data-slice';
import { setPlatform } from '@/store/link-slice';

import './select.css';

interface Props {
  id: string;
  no: number;
}

const LinkInput: React.FC<Props> = ({ id, no }) => {
  const dispatch = useAppDispatch();
  const [url, setUrl] = useState('');
  const [link, setCurrentLink] = useState('');

  const handlePlatformChange = (selectedOption: OptionTypeBase) => {
    const platform = selectedOption?.value;
    dispatch(setPlatform(platform));
  };

  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUrl(e.target.value);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {};

  const handleRemoveLink = (linkId: string) => {
    console.log(linkId);

    dispatch(removeLink(linkId));
  };

  return (
    <div
      className="
        bg-light-gray
        p-5
        rounded-[12px]
        mb-6
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
          <p className="font-bold">Link #{no}</p>
        </div>

        <button onClick={() => handleRemoveLink(id)}>Remove</button>
      </div>
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
          onChange={handleClick}
          required={true}
        />
      </div>
    </div>
  );
};

export default LinkInput;
