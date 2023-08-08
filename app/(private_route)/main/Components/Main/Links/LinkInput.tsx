'use client';

import React from 'react';
import Select from 'react-select';
import OptionTypeBase from 'react-select';
// import 'react-select/dist/react-select.css'; // Import CSS for styling

type PlatformOption = {
  value: string;
  label: string;
  icon: string;
};

const platformOptions: PlatformOption[] = [
  { value: 'facebook', label: 'Facebook', icon: '📘' },
  { value: 'twitter', label: 'Twitter', icon: '🐦' },  
  // ... other platform options
];

const LinkForm: React.FC = () => {
  const handlePlatformChange = (selectedOption: OptionTypeBase) => {
    // Handle selected platform
    console.log('Selected Platform:', selectedOption);
  };

  return (
    <div>
      <h2>Add a Link</h2>
      <Select
        options={platformOptions}
        onChange={handlePlatformChange}
        formatOptionLabel={({ value, label, icon }: PlatformOption) => (
          <div>
            <span>{icon} </span>
            <span>{label}</span>
          </div>
        )}
      />
    </div>
  );
};

export default LinkForm;
