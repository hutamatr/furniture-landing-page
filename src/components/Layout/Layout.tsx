import { Outlet, useLocation } from 'react-router-dom';

import Navigation from '@components/Navigation/Navigation';
import ScrollTop from '@components/UI/ScrollTop/ScrollTop';

export default function Layout() {
  const pathname = useLocation().pathname;

  return (
    <>
      {pathname !== '/login' && pathname !== '/register' && (
        <header className='fixed top-0 z-[100] w-full bg-custom-white-2'>
          <Navigation />
        </header>
      )}
      <main className='layout grid-12 h-screen gap-x-2'>
        <Outlet />
        <ScrollTop />
      </main>
    </>
  );
}
