import clsx from 'clsx';
import { useEffect, useState } from 'react';

import Image from '@components/UI/Image/Image';

import { getUser } from '@api/api';

import { IUser } from 'types/types';

export default function ProfilePage() {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [status, setStatus] = useState<
    'idle' | 'pending' | 'fulfilled' | 'rejected'
  >('idle');

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('auth_token') as string);
    const fetchUser = async () => {
      try {
        setStatus('pending');
        const response = await getUser(token?.access_token);
        if (response.status === 200) {
          setStatus('fulfilled');
          setUser(response.data);
        } else {
          throw new Error('Something went wrong!');
        }
      } catch (error) {
        setStatus('rejected');
        // eslint-disable-next-line no-console
        console.error(error);
      }
    };

    fetchUser();
  }, []);

  return (
    <section className='col-start-1 col-end-13 mt-24 flex min-h-[80vh] flex-col gap-y-10'>
      <h1 className='border-b border-b-custom-black/50 font-neutralBold text-4xl'>
        Profile
      </h1>
      {status === 'pending' && (
        <p className='my-8 text-center font-neutral text-xl'>Loading...</p>
      )}
      {status === 'rejected' && (
        <p className='my-8 text-center font-neutral text-xl text-red-600'>
          Something went wrong!
        </p>
      )}
      {status === 'fulfilled' && (
        <div className={clsx('grid grid-cols-1 gap-y-6', 'md:grid-cols-12')}>
          <Image
            src={user.avatar}
            alt={user.name}
            figureClassName={clsx(
              'h-full w-full overflow-hidden',
              'md:col-start-1 md:col-end-4'
            )}
            imageClassName='w-full rounded-xl'
          />
          <div
            className={clsx(
              'flex flex-col gap-y-4 py-2',
              'md:col-start-5 md:col-end-13'
            )}
          >
            <div className='flex flex-row items-center gap-x-8'>
              <h2 className='text-base font-medium'>Name :</h2>
              <p>{user.name}</p>
            </div>
            <div className='flex flex-row items-center gap-x-8'>
              <h2 className='text-base font-medium'>Email :</h2>
              <p>{user.email}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
