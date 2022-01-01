import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const CartBtn = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-full p-1 border-primary text-primary hover:bg-primary hover:text-white">
      <AiOutlineShoppingCart className="text-4xl" />
    </button>
  );
};

export default CartBtn;
