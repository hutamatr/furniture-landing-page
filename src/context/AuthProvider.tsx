import { createContext, useMemo, useState } from 'react';

import { IAuthToken } from 'types/types';

interface IAuthContext {
  isAuth: boolean | null;
  authHandler: (_token: IAuthToken) => void;
  logoutHandler: () => void;
}

interface IAuthProvider {
  children: React.ReactNode;
}

const getStorageItems = () => {
  const authToken = localStorage.getItem('auth_token');
  return { authToken };
};

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export default function AuthProvider({ children }: IAuthProvider) {
  const { authToken } = getStorageItems();
  const [auth, setAuth] = useState<boolean | null>(!!authToken);

  const authUserHandler = ({ access_token, refresh_token }: IAuthToken) => {
    if (access_token && refresh_token) {
      localStorage.setItem(
        'auth_token',
        JSON.stringify({ access_token, refresh_token })
      );
      setAuth(true);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem('auth_token');
    setAuth(false);
  };

  const value = useMemo(
    () => ({ isAuth: auth, authHandler: authUserHandler, logoutHandler }),
    [auth]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
