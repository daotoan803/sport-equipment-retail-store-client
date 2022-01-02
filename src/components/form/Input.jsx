import React from 'react';

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
