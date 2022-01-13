import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import PropTypes from 'prop-types';

LabelMultiSelectInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

const LabelMultiSelectInput = ({
  label,
  id = Math.random(),
  options,
  onChange,
}) => {
  return (
    <>
      <label htmlFor={id} className="font-bold">
        {label}
      </label>
      <Select
        id={id}
        className="border-primary "
        closeMenuOnSelect={false}
        components={makeAnimated()}
        options={options}
        isMulti
        required
        onChange={onChange}
      />
    </>
  );
};

export default LabelMultiSelectInput;
