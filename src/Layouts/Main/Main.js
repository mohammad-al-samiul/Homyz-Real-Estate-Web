import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../../Pages/Shared/Footer/Footer';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const Main = () => {
  const location = useLocation();
  const isLoginShow = location.pathname.includes('login');
  return (
    <div>
      <>{isLoginShow || <Navbar />}</>
      <>
        <Outlet />
      </>
      <>{isLoginShow || <Footer />}</>
    </div>
  );
};

export default Main;
