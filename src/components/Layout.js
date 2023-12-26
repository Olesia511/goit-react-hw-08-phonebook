import { Outlet } from 'react-router-dom';
import { AppBarHeader } from './AppBar/AppBar';
import { Suspense } from 'react';
import { GlobalStyles } from './GlobalStyles';

export const Layout = () => {
  return (
    <>
      <AppBarHeader />
      <main
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + '/img/phone-back.jpg'
          })`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',

          width: '100vw',
          height: '100vh',
        }}
      >
        <Suspense fallback={<div>LOADING.......</div>}>
          <Outlet />
        </Suspense>
      </main>
      <GlobalStyles />
    </>
  );
};
