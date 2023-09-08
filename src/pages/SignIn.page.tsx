import clsx from 'clsx';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import AuthWrapper from '@components/AuthPage/AuthWrapper';
import Input from '@components/UI/Input/Input';

import { AuthContext } from '@context/AuthProvider';
import { signIn } from '@api/api';

import useInputState from '@hooks/useInputState';

export default function SignInPage() {
  const [passwordView, setPasswordView] = useState(false);
  const { input, setInput, onChangeInputHandler } = useInputState({
    inputState: { email: '', password: '' },
  });
  const [status, setStatus] = useState<
    'idle' | 'pending' | 'fulfilled' | 'rejected'
  >('idle');

  const { authHandler } = useContext(AuthContext);

  const navigate = useNavigate();

  const useDemoAccountHandler = () => {
    setInput({ email: 'john@mail.com', password: 'changeme' });
  };

  const passwordViewHandler = () => {
    setPasswordView((prevState) => !prevState);
  };

  const signInHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (input.email.length === 0 || input.password.length === 0) {
      return;
    }

    try {
      setStatus('pending');
      const response = await signIn(input);
      if (response.status === 201) {
        setStatus('fulfilled');
        authHandler(response.data);
        setInput({ email: '', password: '' });
        navigate('/', { replace: true });
      }
    } catch (error) {
      setStatus('rejected');
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  return (
    <AuthWrapper
      authType='Sign In'
      authDescription='Sign in to your account'
      onUseDemoAccount={useDemoAccountHandler}
    >
      <form onSubmit={signInHandler} className='flex flex-col gap-y-4'>
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
        <button
          className='flex items-center justify-end text-xs text-blue-600 underline'
          type='button'
        >
          forgot password?
        </button>
        <button
          type='submit'
          className='block w-full rounded-md bg-custom-black px-4 py-2 font-semibold text-white shadow-md disabled:cursor-not-allowed disabled:bg-custom-black/80'
          disabled={status === 'pending'}
        >
          {status === 'pending' ? 'Loading...' : 'Sign In'}
        </button>
      </form>
      <p
        className={clsx('text-center text-xs text-custom-black', 'md:text-sm')}
      >
        Don&apos;t have an account?{' '}
        <Link to='/register' className='font-medium underline'>
          Sign Up
        </Link>
      </p>
    </AuthWrapper>
  );
}
