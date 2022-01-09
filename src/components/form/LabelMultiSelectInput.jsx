
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

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
