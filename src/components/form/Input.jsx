import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  type,
  placeholder,
  className = '',
  id = '',
  value,
  onChange,
  error,
  required = false,
}) => {
  return (
    <input
      type={type}
      className={
        'input ' + className + ' ' + (error ? 'ring ring-red-500' : '')
      }
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
};

export default Input;

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.any,
  className: PropTypes.string,
  error: PropTypes.string,
  required: PropTypes.bool,
};
