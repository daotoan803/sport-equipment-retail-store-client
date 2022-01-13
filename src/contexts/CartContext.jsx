import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import Cart from './../components/cart/Cart';

const CartContext = createContext({
  toggleCart() {},
});
export default CartContext;

CartContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const CartContextProvider = ({ children }) => {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const toggleCart = () => setCartIsOpen(!cartIsOpen);

  return (
    <CartContext.Provider value={{ toggleCart }}>
      <Cart cartIsOpen={cartIsOpen} toggleCart={toggleCart} />
      {children}
    </CartContext.Provider>
  );
};
