import React from 'react';
import Logo from './../components/Logo';

const NotFoundPage = ({
  isLoggedIn,
  toggleLoginModal,
  toggleSignupModal,
  logout,
  role,
}) => {
  return (
    <>
      <div className="flex-center flex-col gap-5 fixed top-0 left-0 h-screen w-screen">
        <Logo className="text-[60px]" />
        <h1 className="text-[40px] uppercase font-bold">404 Not found</h1>
      </div>
    </>
  );
};

export default NotFoundPage;
