import { Outlet, useLocation } from 'react-router-dom';

import Navigation from '@components/Navigation/Navigation';

export default function Layout() {
  const pathname = useLocation().pathname;

  return (
    <>
      {pathname !== '/login' && pathname !== '/register' && (
        <header className='sticky top-0 z-50 w-full bg-custom-black'>
          <Navigation />
        </header>
      )}
      <main className='layout grid-12 h-screen gap-x-2'>
        <Outlet />
      </main>
    </>
  );
}
