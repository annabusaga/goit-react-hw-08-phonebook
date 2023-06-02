import { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';

const ContactsPage = lazy(() => import('pages/ContactsPage.jsx'));
const HomePage = lazy(() => import('pages/HomePage.jsx'));
const LoginPage = lazy(() => import('pages/LoginPage.jsx'));
const RegisterPage = lazy(() => import('pages/RegisterPage.jsx'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
};

export default App;
