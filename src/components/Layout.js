import { Outlet } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
import { AppBarHeader } from './AppBar/AppBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + '/img/phone_back.jpg'
        })`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',

        width: '100vw',
        height: '100vh',
      }}
    >
      <AppBarHeader />
      <Suspense fallback={<div>LOADING.......</div>}>
        <Outlet />
      </Suspense>
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
    </div>
  );
};
