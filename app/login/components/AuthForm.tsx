'use client';

import { useState } from 'react';
import FullLogo from '../../Components/Logo/FullLogo';
import InputWithIcon from './InputWithIcon';
import GoogleLogin from './GoogleLogin';
import { ZodType, z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

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

  // zod schemas
  const registerSchema: ZodType<FormData> = z
    .object({
      email: z.string().email(),
      password: z.string().min(8).max(20),
      confirmPassword: z.string().min(8).max(20),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: 'Please check again',
      path: ['confirmPassword'],
    });

  const loginSchema: ZodType<Partial<FormData>> = z.object({
    email: z.string().email(),
    password: z.string().min(8).max(20),
  });

  const schema = formType === 'LOGIN' ? loginSchema : registerSchema;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const submitFormData = (data: FormData) => {
    console.log(data);
  };

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
        onSubmit={handleSubmit(submitFormData)}
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
            register={register}
            errors={errors}
            label="Email address"
            icon="/images/icon-email.svg"
            placeholder="e.g alex@email.com"
            // required={true}
            error="Can't be empty"
          />
          <InputWithIcon
            name="password"
            type="password"
            register={register}
            errors={errors}
            label="Password"
            icon="/images/icon-password.svg"
            placeholder={
              formType === 'LOGIN'
                ? 'Enter your password'
                : 'At least 8 characters'
            }
            error="Please check again"
            // required={true}
          />
          {formType === 'REGISTER' && (
            <>
              <InputWithIcon
                name="confirmPassword"
                type="password"
                register={register}
                errors={errors}
                label="Confirm password"
                icon="/images/icon-password.svg"
                placeholder="At least 8 characters"
                error="Please check again"
                // required={true}
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
