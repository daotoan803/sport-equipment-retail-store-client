import React from 'react';

const SecondaryButton = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={
        'bg-white py-2 px-3 text-primary font-bold border-2 border-primary rounded-2xl hover:bg-primary hover:text-white hover:ring hover:ring-primary ' +
        className
      }>
      {children}
    </button>
  );
};

export default SecondaryButton;
