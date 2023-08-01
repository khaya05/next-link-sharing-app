'use client';

import { useState } from 'react';
import FullLogo from '../../Components/Logo/FullLogo';
import InputWithIcon from '../../Components/Input/InputWithIcon';
import GoogleLogin from './GoogleLogin';

type FormAction = 'LOGIN' | 'REGISTER';

export default function AuthForm() {
  const [formType, setFormType] = useState<FormAction>('LOGIN');

  const heading = formType === 'LOGIN' ? 'Login' : 'Create Account';
  const legend =
    formType === 'LOGIN'
      ? 'Add your details below to get back into the app'
      : 'Let’s get you started sharing your links!';

  return (
    <div
      className="
        flex
        flex-col
        items-center
        md:gap-[3.66rem]
      "
    >
      <FullLogo />
      <form
        className="
        bg-white
        md:w-[29.75rem]
        md:p-10
        md:rounded-lg

        "
      >
        <h2
          className="
            text-dark-gray
            font-bold
            md:text-[2rem]
            md:leading-[3rem]
          "
        >
          {heading}
        </h2>
        <legend
          className="
            text-base 
            text-gray 
            leading-[1.5rem]
            md:mb-10
        "
        >
          {legend}
        </legend>

        <GoogleLogin />

        <div>
          <InputWithIcon
            name="email"
            type="text"
            label="Email address"
            icon="/images/icon-email.svg"
            placeholder="e.g alex@email.com"
            required={true}
            error="Can't be empty"
          />
          <InputWithIcon
            name="password"
            type="password"
            label="Password"
            icon="/images/icon-password.svg"
            placeholder={
              formType === 'LOGIN'
                ? 'Enter your password'
                : 'At least 8 characters'
            }
            error="Please check again"
            required={true}
          />
          {formType === 'REGISTER' && (
            <>
              <InputWithIcon
                name="confirmPassword"
                type="password"
                label="Confirm password"
                icon="/images/icon-password.svg"
                placeholder="At least 8 characters"
                error="Please check again"
                required={true}
              />

              <p
                className="
                  text-gray
                  text-[12px]
                  leading-[1.125]
                  mb-6
            "
              >
                Password must contain at least 8 characters
              </p>
            </>
          )}
        </div>
        <button
          className="
            h-[2.75rem]
            w-full
            mb-6
            bg-purple
            text-white
            text-base
            rounded-[8px]
            font-[600]
            hover:bg-purple-hover

        "
        >
          {formType === 'LOGIN' ? 'Login' : 'Create new Account'}
        </button>

        <p className="text-gray text-base text-center">
          {formType === 'LOGIN'
            ? "Don't have an account "
            : 'Already have an account? '}
          <span
            onClick={() =>
              setFormType(formType === 'LOGIN' ? 'REGISTER' : 'LOGIN')
            }
            className="text-purple hover:text-purple-hover cursor-pointer"
          >
            {formType === 'LOGIN' ? 'Create account' : 'Login'}
          </span>
        </p>
      </form>
    </div>
  );
}
