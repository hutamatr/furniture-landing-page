import clsx from 'clsx';
import { Link } from 'react-router-dom';

import AuthWrapper from '@components/AuthPage/AuthWrapper';
import Input from '@components/UI/Input/Input';

import { signIn } from '@api/api';

import useInputState from '@hooks/useInputState';

export default function SignInPage() {
  const { input, onChangeInputHandler } = useInputState({
    inputState: { email: '', password: '' },
  });

  const signInHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (input.email.length === 0 || input.password.length === 0) {
      return;
    }

    try {
      await signIn(input);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  return (
    <AuthWrapper authType='Sign In' authDescription='Sign in to your account'>
      <form onSubmit={signInHandler} className='flex flex-col gap-y-4'>
        <Input
          label='Email'
          type='email'
          placeholder='example@gmail.com'
          name='email'
          onChange={onChangeInputHandler}
        />
        <Input
          label='Password'
          type='password'
          placeholder='••••••••'
          name='password'
          onChange={onChangeInputHandler}
        />
        <button
          type='submit'
          className='block w-full rounded-md bg-black px-4 py-2 font-semibold text-white shadow-md'
        >
          Sign In
        </button>
      </form>
      <p className={clsx('text-center text-xs', 'md:text-sm')}>
        Don&apos;t have an account?{' '}
        <Link to='/register' className='font-medium underline'>
          Sign Up
        </Link>
      </p>
    </AuthWrapper>
  );
}
