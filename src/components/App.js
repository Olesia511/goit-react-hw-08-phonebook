// import { useEffect, lazy } from 'react';
// import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
// import { Layout } from './Layout';
// import { PrivateRoute } from './PrivateRoute';
// import { RestrictedRoute } from './RestrictedRoute';

import { RegisterPage } from '../pages/RegisterPage';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { ContactsPage } from '../pages/ContactsPage';

export const App = () => {
  return (
    // <Container>
    // <AppBar/>
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
    // </Container>
  );
};
