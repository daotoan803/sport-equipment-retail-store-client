import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Cart from '../../components/cart/Cart';
import ShopHeader from '../../components/header/ShopHeader';
import MainWrapper from './../../components/ui/MainWrapper';

const ShopPage = ({
  isLoggedIn,
  toggleLoginModal,
  toggleSignupModal,
  logout,
  role,
}) => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const toggleCart = () => setCartIsOpen(!cartIsOpen);
  return (
    <>
      <ShopHeader
        isLoggedIn={isLoggedIn}
        toggleLoginModal={toggleLoginModal}
        toggleSignupModal={toggleSignupModal}
        toggleCart={toggleCart}
        logout={logout}
        role={role}
      />
      <Cart cartIsOpen={cartIsOpen} toggleCart={toggleCart} />
      <MainWrapper>
        <Outlet />
      </MainWrapper>
    </>
  );
};

export default ShopPage;
