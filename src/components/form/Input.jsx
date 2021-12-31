import React from 'react';

const Input = ({ type, placeholder, className, id = '', value, onChange }) => {
  return (
    <input
      type={type}
      className={
        'border border-gray-400 rounded-xl px-3 py-2 focus:border-0 focus:outline-none focus-visible:ring focus-visible:ring-primary ' +
        className
      }
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
