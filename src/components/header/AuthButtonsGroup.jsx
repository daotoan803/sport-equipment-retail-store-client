import React, { useContext } from 'react';
import AccountBtn from '../button/AccountBtn';
import CartBtn from './../button/CartBtn';
import AuthContext from './../../contexts/AuthContext';
import PropTypes from 'prop-types';
import LoginModalContext from './../../contexts/LoginModalContext';
import SignupModalContext from './../../contexts/SignupModalContext';
import CartContext from './../../contexts/CartContext';

const AuthButtonsGroup = ({ showCartButton = true }) => {
  const authCtx = useContext(AuthContext);
  const loginModalCtx = useContext(LoginModalContext);
  const signupModalCtx = useContext(SignupModalContext);
  const cartCtx = useContext(CartContext);

  return (
    <>
      {authCtx.isLoggedIn && (
        <div className="flex gap-3">
          <AccountBtn logout={authCtx.logout} />
          {showCartButton && <CartBtn onClick={cartCtx.toggleCart} />}
        </div>
      )}
      {!authCtx.isLoggedIn && (
        <div className="flex gap-3 items-center">
          <button
            onClick={loginModalCtx.toggleLoginModal}
            className="text-primary font-bold px-4 py-1 border-2 border-primary rounded-3xl hover:bg-primary hover:text-white">
            Login
          </button>
          <button
            onClick={signupModalCtx.toggleSignupModal}
            className="hover:text-primary font-semibold">
            Signup
          </button>
        </div>
      )}
    </>
  );
};

export default AuthButtonsGroup;

AuthButtonsGroup.propTypes = {
  showCartButton: PropTypes.bool,
};
