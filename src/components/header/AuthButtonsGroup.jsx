import React from 'react';
import AccountBtn from '../button/AccountBtn';
import CartBtn from './../button/CartBtn';
import { Link } from 'react-router-dom';

const AuthButtonsGroup = ({ isLoggedIn, toggleLoginModal }) => {
  return (
    <>
      {isLoggedIn && (
        <div className="flex gap-3">
          <AccountBtn />
          <CartBtn />
        </div>
      )}
      {!isLoggedIn && (
        <div className="flex gap-3 items-center">
          <button
            onClick={() => toggleLoginModal()}
            to="/login"
            className="text-primary font-bold px-4 py-1 border-2 border-primary rounded-3xl hover:bg-primary hover:text-white">
            Login
          </button>
          <Link to="/signup" className="hover:text-primary font-semibold">
            Signup
          </Link>
        </div>
      )}
    </>
  );
};

export default AuthButtonsGroup;
