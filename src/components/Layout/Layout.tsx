import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <main className='layout grid-12 h-screen'>
        <Outlet />
      </main>
    </>
  );
}
