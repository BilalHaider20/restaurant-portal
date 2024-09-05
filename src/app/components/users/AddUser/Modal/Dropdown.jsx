// components/Dropdown.js
import PropTypes from 'prop-types';

const Dropdown = ({ options, placeholder, label, id }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="text-base font-medium">
        {label}
      </label>
      <select
        id={id}
        className="border rounded-lg p-3 text-gray-800 w-full"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Dropdown;