import clsx from 'clsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import AuthWrapper from '@components/AuthPage/AuthWrapper';
import Input from '@components/UI/Input/Input';

import useInputState from '@hooks/useInputState';

export default function SignUpPage() {
  const [passwordView, setPasswordView] = useState(false);
  const { input, onChangeInputHandler } = useInputState({
    inputState: { username: '', email: '', password: '', confirmPassword: '' },
  });

  const passwordViewHandler = () => {
    setPasswordView((prevState) => !prevState);
  };
  const signUpHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      input.username.length === 0 ||
      input.email.length === 0 ||
      input.password.length === 0 ||
      input.confirmPassword.length === 0
    ) {
      return;
    }
    alert(
      'Register is not fully implemented yet, please login with demo account'
    );
  };

  return (
    <AuthWrapper
      authType='Sign Up'
      authDescription='Create an account to get started today'
    >
      <form onSubmit={signUpHandler} className='flex w-full flex-col gap-y-4'>
        <Input
          label='Username'
          type='text'
          placeholder='John Doe'
          name='username'
          onChange={onChangeInputHandler}
          value={input.username}
        />
        <Input
          label='Email'
          type='email'
          placeholder='example@gmail.com'
          name='email'
          onChange={onChangeInputHandler}
          value={input.email}
        />
        <Input
          label='Password'
          type='password'
          placeholder='••••••••'
          name='password'
          onChange={onChangeInputHandler}
          value={input.password}
          isPassword
          onPasswordView={passwordViewHandler}
          isPasswordView={passwordView}
        />
        <Input
          label='Confirm Password'
          type='password'
          placeholder='••••••••'
          name='confirmPassword'
          onChange={onChangeInputHandler}
          value={input.confirmPassword}
          isPasswordView={passwordView}
        />
        <button
          type='submit'
          className='block w-full rounded-md bg-custom-black px-4 py-2 font-semibold text-white shadow-md'
        >
          Sign Up
        </button>
      </form>
      <p
        className={clsx('text-center text-xs text-custom-black', 'md:text-sm')}
      >
        Already have an account?{' '}
        <Link to='/login' className='font-medium underline'>
          Sign In
        </Link>
      </p>
    </AuthWrapper>
  );
}
