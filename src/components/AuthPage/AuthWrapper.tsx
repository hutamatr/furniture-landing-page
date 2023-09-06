import clsx from 'clsx';

import authBg from '@assets/image/pattern.webp';

interface IAuthWrapperProps {
  children: React.ReactNode;
  authType: 'Sign In' | 'Sign Up';
  authDescription: string;
}

export default function AuthWrapper({
  children,
  authType,
  authDescription,
}: IAuthWrapperProps) {
  return (
    <>
      <section
        className={clsx(
          'col-start-1 col-end-13 grid place-items-center',
          'lg:col-end-6'
        )}
      >
        <div
          className={clsx(
            'mx-auto flex w-full flex-col gap-y-4',
            'md:max-w-sm'
          )}
        >
          <div className='flex flex-col items-start gap-y-2'>
            <h1 className={clsx('text-2xl font-semibold', 'md:text-3xl')}>
              {authType}
            </h1>
            <p>{authDescription}</p>
          </div>
          {children}
        </div>
      </section>
      <figure
        className={clsx(
          'hidden',
          'lg:col-start-6 lg:col-end-13 lg:grid lg:w-full lg:place-items-center lg:overflow-hidden lg:py-4'
        )}
      >
        <img
          src={authBg}
          loading='lazy'
          alt=''
          className={clsx('w-full rounded-3xl', 'md:h-full', '2xl:h-[32rem]')}
        />
      </figure>
    </>
  );
}
