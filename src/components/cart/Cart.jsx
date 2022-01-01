import React from 'react';
import { AnimatePresence } from 'framer-motion';
import CloseButton from './../button/CloseButton';
import Overlay from './../modal/Overlay';

const flyInVariant = {
  hidden: { x: '100vw' },
  visible: { x: 0, transition: { type: '' } },
  exit: { x: '100vw', transition: { type: '' } },
};

const Cart = ({ cartIsOpen, toggleCart }) => {
  return (
    <AnimatePresence>
      {cartIsOpen && (
        <Overlay onClick={toggleCart} customVariants={flyInVariant}>
          <div
            className="fixed z-40 top-0 right-0 
                    bg-white shadow-2xl py-4 px-2
                      h-full w-11/12 sm:w-1/2 md:w-1/3 lg:w-1/4">
            <CloseButton onClick={toggleCart} className="top-4 left-4" />
            <h1>this is your cart</h1>
          </div>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default Cart;
