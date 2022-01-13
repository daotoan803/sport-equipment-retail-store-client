import React from 'react';
import PropTypes from 'prop-types';

PrimaryButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
};

const PrimaryButton = ({ onClick, children, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`border-2 bg-primary rounded-3xl text-white px-5 py-2 font-bold hover:bg-white hover:border-primary hover:text-primary ${className}`}>
      {children}
    </button>
  );
};

export default PrimaryButton;
