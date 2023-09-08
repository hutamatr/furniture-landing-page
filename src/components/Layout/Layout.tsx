import clsx from 'clsx';
import { Outlet, useLocation } from 'react-router-dom';

import Footer from '@components/Home/Footer';
import Navigation from '@components/Navigation/Navigation';
import ScrollTop from '@components/UI/ScrollTop/ScrollTop';

export default function Layout() {
  const pathname = useLocation().pathname;
  const isOnAuthPage = pathname === '/login' || pathname === '/register';

  return (
    <>
      {!isOnAuthPage && (
        <header className='fixed top-0 z-[100] w-full bg-custom-white-2'>
          <Navigation />
        </header>
      )}
      <main
        className={clsx(
          isOnAuthPage && 'min-h-screen',
          'layout grid-12 gap-x-2'
        )}
      >
        <Outlet />
      </main>
      {!isOnAuthPage && <Footer />}
      <ScrollTop />
    </>
  );
}
