import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { AuthContext } from '@context/AuthProvider';

export default function RequireAuth() {
  const { isAuth } = useContext(AuthContext);

  return isAuth ? <Outlet /> : <Navigate to='/login' replace />;
}
