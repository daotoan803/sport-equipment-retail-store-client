import React from 'react';
import PropTypes from 'prop-types';

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

SecondaryButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
};
