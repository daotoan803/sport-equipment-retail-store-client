import React from 'react';

const Modal = ({ children, className }) => {
  return (
    <div className={"z-30 " + className} onClick={(e) => e.stopPropagation()}>
      {children}
    </div>
  );
};

export default Modal;
