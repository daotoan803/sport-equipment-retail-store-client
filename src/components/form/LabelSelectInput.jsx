import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

LabelSelectInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

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
