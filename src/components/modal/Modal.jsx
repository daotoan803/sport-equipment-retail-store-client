import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const Modal = ({ children, className, onCloseModalClick }) => {
  return (
    <div
      className={
        'z-30 bg-opacity-100 opacity-100 bg-white h-auto py-8 rounded-2xl relative w-screen sm:mx-8 md:w-3/4 md:mx-auto lg:w-2/3 lg:px-6 ' +
        className
      }
      onClick={(e) => e.stopPropagation()}>
      <button
        onClick={onCloseModalClick}
        className="absolute top-4 right-6 hover:text-primary">
        <AiOutlineClose className="text-3xl" />
      </button>
      {children}
    </div>
  );
};

export default Modal;
