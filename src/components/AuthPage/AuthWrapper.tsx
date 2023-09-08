import clsx from 'clsx';
import { MdHome } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';

import Image from '@components/UI/Image/Image';

import authBg from '@assets/image/pattern.webp';

interface IAuthWrapperProps {
  children: React.ReactNode;
  authType: 'Sign In' | 'Sign Up';
  authDescription: string;
  onUseDemoAccount?: () => void;
}

export default function AuthWrapper({
  children,
  authType,
  authDescription,
  onUseDemoAccount,
}: IAuthWrapperProps) {
  const pathname = useLocation().pathname;

  return (
    <>
      <Image
        src={authBg}
        alt='auth-background'
        figureClassName={clsx(
          'hidden',
          'lg:col-start-1 lg:col-end-8 lg:grid lg:w-full lg:place-items-center lg:overflow-hidden lg:py-4'
        )}
        imageClassName={clsx('rounded-3xl', 'md:h-full', '2xl:h-[32rem]')}
        onMotion={{
          initial: { opacity: 0, x: -16 },
          animate: { opacity: 1, x: 0, transition: { duration: 0.7 } },
          exit: { opacity: 0, x: 0 },
        }}
      />
      <section
        className={clsx(
          'col-start-1 col-end-13 grid place-items-center',
          'lg:col-start-8 lg:col-end-13'
        )}
      >
        <div
          className={clsx(
            'mx-auto flex w-full flex-col gap-y-4',
            'md:max-w-sm'
          )}
        >
          <div className='flex flex-col items-start gap-y-2'>
            <div className='flex w-full items-center justify-between'>
              <h1
                className={clsx(
                  'pt-2 font-neutral text-2xl font-semibold text-custom-black',
                  'md:text-3xl'
                )}
              >
                {authType}
              </h1>
              <Link to='/' className='w-fit'>
                <MdHome
                  className={clsx(
                    'h-8 w-8 rounded-full border border-custom-black/50 p-1 text-custom-black',
                    '2xl:h-9 2xl:w-9'
                  )}
                />
              </Link>
            </div>
            <div className='flex w-full items-center justify-between'>
              <p className={clsx('text-xs text-custom-black', 'md:text-sm')}>
                {authDescription}
              </p>
              {pathname === '/login' && (
                <button
                  className='text-xs text-custom-black underline hover:text-custom-black/80'
                  onClick={onUseDemoAccount}
                >
                  demo account
                </button>
              )}
            </div>
          </div>
          {children}
        </div>
      </section>
    </>
  );
}
