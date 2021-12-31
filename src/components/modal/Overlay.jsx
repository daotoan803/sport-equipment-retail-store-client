import React from 'react';

const Overlay = ({ children, onClick }) => {
  return (
    <div
      onClick={() => onClick()}
      className="fixed bg-gray-600 opacity-70 top-0 left-0 w-screen h-screen z-20 flex justify-center items-center">
      {children}
    </div>
  );
};

export default Overlay;
