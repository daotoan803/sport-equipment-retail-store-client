import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from './../components/cart/Cart';
import ShopHeader from './../components/header/ShopHeader';

const ShopPage = ({
  isLoggedIn,
  toggleLoginModal,
  toggleSignupModal,
  logout,role
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
      <Routes>
        <Route path={'/'} exact element={<h1>Hello world</h1>} />
      </Routes>
    </>
  );
};

export default ShopPage;
