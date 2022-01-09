import React from 'react';
import Input from './Input';
import ErrorLabel from './ErrorLabel';

const LabelInput = ({
  type = 'text',
  placeholder,
  label,
  value,
  onChange,
  id = Math.random(),
  inputClassName = '',
  labelClassName = '',
  error = '',
  required = false,
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
        required={required}
      />
      {error && <ErrorLabel message={error} />}
    </div>
  );
};

export default LabelInput;
