import { Route, Routes } from 'react-router-dom';

import RequireAuth from '@components/AuthPage/RequireAuth';
import Layout from '@components/Layout/Layout';

import HomePage from '@pages/Home.page';
import ProfilePage from '@pages/Profile.page';
import SignInPage from '@pages/SignIn.page';
import SignUpPage from '@pages/SignUp,page';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='login' element={<SignInPage />} />
        <Route path='register' element={<SignUpPage />} />
        <Route element={<RequireAuth />}>
          <Route path='profile' element={<ProfilePage />} />
        </Route>
      </Route>
    </Routes>
  );
}
