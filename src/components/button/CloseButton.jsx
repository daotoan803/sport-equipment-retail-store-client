import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const CloseButton = ({onClick, className}) => {
  return (
    <button
      onClick={onClick}
      className={"absolute hover:text-primary " + className}>
      <AiOutlineClose className="text-3xl" />
    </button>
  );
};

export default CloseButton;
