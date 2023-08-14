'use client';

import React, { useState } from 'react';
import Heading from '../shared/Heading';
import ProfilePic from './ProfilePic';
import UserDetails from './UserDetails';

const Profile = () => {

  return (
    <div className='md:p-10'>
      <Heading
        title="Profile Details"
        legend="Add your details to create a personal touch to your profile."

      />
      <ProfilePic />
      <UserDetails />
    </div>
  );
};

export default Profile;
