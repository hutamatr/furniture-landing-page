import clsx from 'clsx';
import { useContext, useState } from 'react';
import { CgClose, CgMenuRight } from 'react-icons/cg';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import { AuthContext } from '@context/AuthProvider';

export default function Navigation() {
  const [menuView, setMenuView] = useState(false);

  const { logoutHandler } = useContext(AuthContext);

  const navigate = useNavigate();

  const menuHandler = () => setMenuView((prevState) => !prevState);
  const menuViewClose = () => setMenuView(false);

  const logoutUserHandler = () => {
    logoutHandler();
    menuViewClose();
    navigate('/login');
  };

  return (
    <nav className='layout relative flex flex-row items-center justify-between py-6'>
      <Link to='/' replace={true} className='flex items-center gap-x-3'>
        {/* <Image
          src={LogoImg}
          alt='Urban Fashion'
          className={clsx('w-36', 'md:w-56')}
        /> */}
      </Link>
      <div className='flex flex-row gap-x-6'>
        <button className={clsx('sm:hidden')} onClick={menuHandler}>
          {menuView ? (
            <CgClose className='h-6 w-6 text-custom-white-2' />
          ) : (
            <CgMenuRight className='h-6 w-6 text-custom-white-2' />
          )}
        </button>
      </div>
      <ul
        className={clsx(
          menuView ? 'top-0' : 'translate-x-[999px] sm:top-full',
          'fixed right-0 top-16 flex h-screen w-[70vw] flex-col items-center gap-y-6 rounded-bl-xl bg-custom-black px-6 py-4 text-center text-sm font-semibold text-neutral-500 shadow-md duration-700',
          'sm:static sm:top-0 sm:h-fit sm:min-h-0 sm:w-auto sm:translate-x-0 sm:flex-row sm:items-center sm:gap-x-8 sm:bg-transparent sm:py-0 sm:opacity-100 sm:shadow-none sm:duration-75'
        )}
      >
        <li
          onClick={menuViewClose}
          className='w-fit rounded-sm px-2 py-1 text-custom-white-2 duration-300'
        >
          <NavLink to='/'>Profile</NavLink>
        </li>
        <li
          onClick={menuViewClose}
          className='w-fit rounded-sm px-2 py-1 text-red-500 duration-300'
        >
          <button onClick={logoutUserHandler}>Logout</button>
        </li>
      </ul>
    </nav>
  );
}
