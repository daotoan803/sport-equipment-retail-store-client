import React from 'react';

const LabelSelectInput = ({
  label,
  id = Math.random(),
  options,
  value,
  onChange,
}) => {
  return (
    <>
      <label htmlFor={id} className="font-bold sm:mt-0 sm:ml-4 ">
        {label}
      </label>
      <select
        name=""
        id={id}
        className="input"
        value={value}
        onChange={onChange}>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default LabelSelectInput;
