import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

const LabelSelectInput = ({
  label,
  id = Math.random(),
  options,
  value,
  onChange,
}) => {
  return (
    <>
      <label htmlFor={id} className="font-bold sm:mt-0  ">
        {label}
      </label>
      <Select
        id={id}
        options={options}
        value={value}
        onChange={onChange}
        menuPlacement="auto"
        className="w-full"
      />
    </>
  );
};

export default LabelSelectInput;

LabelSelectInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.any,
  options: PropTypes.array.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
