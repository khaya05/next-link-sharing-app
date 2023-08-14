'use client';

import React, { useState } from 'react';
import LinkForm from '../Links/LinkInput';
import Heading from '../shared/Heading';

const Profile = () => {
  return (
    <div className='md:p-10'>
      <Heading
        title="Profile Details"
        legend="Add your details to create a personal touch to your profile."
      />
    </div>
  );
};

export default Profile;
