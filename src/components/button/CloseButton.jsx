import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import PropTypes from 'prop-types';

const CloseButton = ({ onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={'absolute hover:text-primary ' + className}>
      <AiOutlineClose className="text-3xl" />
    </button>
  );
};

export default CloseButton;

CloseButton.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
};
