'use client';

import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import FullLogo from '../../Components/Logo/FullLogo';
import InputWithIcon from './InputWithIcon_copy';
import GoogleLogin from './GoogleLogin';

type FormAction = 'LOGIN' | 'REGISTER';

type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

export default function AuthForm() {
  const [formType, setFormType] = useState<FormAction>('LOGIN');

  const heading = formType === 'LOGIN' ? 'Login' : 'Create Account';
  const legend =
    formType === 'LOGIN'
      ? 'Add your details below to get back into the app'
      : 'Let’s get you started sharing your links!';

  const [credentials, setCredentials] = useState<FormData>({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const formRef = useRef(null);

  const [isInputValid, setIsInputValid] = useState(true);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputElement = e.currentTarget;
    const { name, value } = inputElement;
    setCredentials((state) => {
      return { ...state, [name]: value };
    });
    setIsInputValid(inputElement.checkValidity());
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formElement = event.currentTarget;
    const isFormValid = formElement.checkValidity();

    if (isFormValid) {
      // Perform the form submission logic here
      console.log('Form is valid. Submitting...');
    } else {
      // Set the isInputValid state to trigger error message or styles
      setIsInputValid(false);
    }
    console.log(isInputValid);
  };

  return (
    <div
      className="
        w-fit
        flex
        flex-col
        items-start
        gap-[4.4rem]
        mx-auto
        md:items-center
        md:gap-[3.66rem]
      "
    >
      <FullLogo />
      <form
        ref={formRef}
        onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}
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
            text-[1.5rem]
            leading-[2.25rem]
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
            // required={true}
            error="Can't be empty"
            value={credentials.email}
            onChange={onChange}
            isInputValid={isInputValid}
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
            pattern="^.{8,}$"
            required={true}
            value={credentials.password}
            onChange={onChange}
            isInputValid={isInputValid}
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
                value={credentials.confirmPassword}
                pattern={credentials.password}
                onChange={onChange}
                isInputValid={isInputValid}
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
          type="submit"
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
