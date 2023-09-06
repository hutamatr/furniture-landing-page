import clsx from 'clsx';
import { useLocation } from 'react-router-dom';

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
      <figure
        className={clsx(
          'hidden',
          'lg:col-start-1 lg:col-end-8 lg:grid lg:w-full lg:place-items-center lg:overflow-hidden lg:py-4'
          // '2xl:col-start-1'
        )}
      >
        <img
          src={authBg}
          loading='lazy'
          alt=''
          className={clsx('w-full rounded-3xl', 'md:h-full', '2xl:h-[32rem]')}
        />
      </figure>
      <section
        className={clsx(
          'col-start-1 col-end-13 grid place-items-center',
          'lg:col-start-8 lg:col-end-13'
          // '2xl:col-start-6'
        )}
      >
        <div
          className={clsx(
            'mx-auto flex w-full flex-col gap-y-4',
            'md:max-w-sm'
          )}
        >
          <div className='flex flex-col items-start gap-y-2'>
            <h1
              className={clsx(
                'font-neutral text-2xl font-semibold text-custom-black',
                'md:text-3xl'
              )}
            >
              {authType}
            </h1>
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
