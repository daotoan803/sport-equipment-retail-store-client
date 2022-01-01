import React from 'react';

const Input = ({ type, placeholder, className, id = '', value, onChange }) => {
  return (
    <input
      type={type}
      className={'input ' + className}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
