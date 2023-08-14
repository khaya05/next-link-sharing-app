'use client';

import ProfileInput from './ProfileInput';

function UserDetails() {
  return (
    <div className="bg-light-gray p-5 rounded-xl flex flex-col gap-3">
      <ProfileInput label="First name*" type="text" placeholder="e.g John" />
      <ProfileInput label="Last name*" type="text" placeholder="e.g Stone" />
      <ProfileInput
        label="Email"
        type="email"
        placeholder="e.g email@example.com"
      />
    </div>
  );
}

export default UserDetails;
