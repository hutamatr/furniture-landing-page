import { Route, Routes } from 'react-router-dom';

import Layout from '@components/Layout/Layout';

import LoginPage from '@pages/Login.page';

import './App.css';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='login' element={<LoginPage />} />
      </Route>
    </Routes>
  );
}
