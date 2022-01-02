import React from 'react';
import AccountBtn from '../button/AccountBtn';
import CartBtn from './../button/CartBtn';

const AuthButtonsGroup = ({
  isLoggedIn,
  toggleLoginModal,
  toggleSignupModal,
  logout,
  toggleCart,
  showCartButton = true,
}) => {
  return (
    <>
      {isLoggedIn && (
        <div className="flex gap-3">
          <AccountBtn logout={logout} />
          {showCartButton && <CartBtn onClick={toggleCart} />}
        </div>
      )}
      {!isLoggedIn && (
        <div className="flex gap-3 items-center">
          <button
            onClick={toggleLoginModal}
            className="text-primary font-bold px-4 py-1 border-2 border-primary rounded-3xl hover:bg-primary hover:text-white">
            Login
          </button>
          <button
            onClick={toggleSignupModal}
            className="hover:text-primary font-semibold">
            Signup
          </button>
        </div>
      )}
    </>
  );
};

export default AuthButtonsGroup;
