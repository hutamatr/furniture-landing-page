import clsx from 'clsx';
import { useContext, useState } from 'react';
import { CgClose, CgMenuRight } from 'react-icons/cg';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import Image from '@components/UI/Image/Image';

import { AuthContext } from '@context/AuthProvider';

import HomeImg from '@assets/image/home.webp';

export default function Navigation() {
  const [menuView, setMenuView] = useState(false);

  const { isAuth, logoutHandler } = useContext(AuthContext);

  const navigate = useNavigate();

  const menuHandler = () => setMenuView((prevState) => !prevState);
  const menuViewClose = () => setMenuView(false);

  const logoutUserHandler = () => {
    logoutHandler();
    menuViewClose();
    navigate('/');
  };

  return (
    <nav className='layout relative flex flex-row items-center justify-between py-4'>
      <Link to='/' replace={true} className='flex items-center gap-x-3'>
        <Image src={HomeImg} alt='Home Image' imageClassName='w-10' />
      </Link>
      <div className={clsx('flex flex-row gap-x-6', 'sm:hidden')}>
        <button onClick={menuHandler}>
          {menuView ? (
            <CgClose className='h-6 w-6 text-custom-black' />
          ) : (
            <CgMenuRight className='h-6 w-6 text-custom-black' />
          )}
        </button>
      </div>
      <ul
        className={clsx(
          menuView ? '' : 'translate-x-[999px]',
          'absolute left-0 right-0 top-24 z-10 mx-auto flex h-fit w-full flex-col items-center gap-y-6 rounded-xl bg-custom-black p-6 text-center text-custom-white-2 shadow-md duration-700',
          'sm:static sm:top-0 sm:mx-0 sm:h-fit sm:min-h-0 sm:w-auto sm:translate-x-0 sm:flex-row sm:items-center sm:gap-x-8 sm:bg-transparent sm:p-0 sm:text-custom-black sm:shadow-none'
        )}
      >
        <li
          onClick={menuViewClose}
          className='w-fit rounded-sm px-2 py-1 font-normal duration-300'
        >
          <NavLink to='/'>Home</NavLink>
        </li>
        {isAuth && (
          <>
            <li
              onClick={menuViewClose}
              className='w-fit rounded-sm px-2 py-1 font-normal duration-300'
            >
              <NavLink to='/profile'>Profile</NavLink>
            </li>
            <li
              onClick={menuViewClose}
              className='w-fit rounded-sm px-2 py-1 font-normal text-red-500 duration-300'
            >
              <button onClick={logoutUserHandler}>Logout</button>
            </li>
          </>
        )}

        {!isAuth && (
          <li
            onClick={menuViewClose}
            className='w-fit rounded-sm px-2 py-1 font-normal duration-300'
          >
            <NavLink to='/login'>Login</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
