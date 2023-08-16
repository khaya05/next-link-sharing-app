'use client';

import { ChangeEvent, useState } from 'react';
import ProfileInput from './ProfileInput';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { setUserProfile } from '@/store/user-data-slice';

function UserDetails() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputElement = e.currentTarget;
    const { name, value } = inputElement;
    setUserData((state) => {
      return { ...state, [name]: value };
    });
    dispatch(setUserProfile(userData));
  };


  return (
    <div className="bg-light-gray p-5 rounded-xl flex flex-col gap-3">
      <ProfileInput
        name="firstName"
        onChange={handleChange}
        value={userData.firstName}
        label="First name*"
        type="text"
        placeholder="e.g John"
      />
      <ProfileInput
        name="lastName"
        onChange={handleChange}
        value={userData.lastName}
        label="Last name*"
        type="text"
        placeholder="e.g Stone"
      />
      <ProfileInput
        name="email"
        onChange={handleChange}
        value={userData.email}
        label="Email"
        type="email"
        placeholder="e.g email@example.com"
      />
    </div>
  );
}

export default UserDetails;
