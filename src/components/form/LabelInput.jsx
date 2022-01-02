import React from 'react';
import Input from './Input';

const LabelInput = ({
  type,
  placeholder,
  label,
  value,
  onChange,
  id = Math.random(),
  inputClassName = '',
  labelClassName = '',
  error = '',
}) => {
  return (
    <div className="w-full flex flex-col">
      <label htmlFor={id} className={'font-bold' + labelClassName}>
        {label}
      </label>
      <Input
        value={value}
        onChange={onChange}
        id={id}
        type={type}
        placeholder={placeholder}
        className={inputClassName}
        error={error}
      />
      {error && <p className={'text-red-500 font-semibold'}>{error}</p>}
    </div>
  );
};

export default LabelInput;
