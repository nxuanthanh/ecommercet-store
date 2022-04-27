import React, { useRef } from "react";
import PropTypes from "prop-types";
import "./checkbox.scss";

function Checkbox({ label = "", checked, onChange = null }) {
  const inputRef = useRef();
  const handleOnChange = () => {
    if (onChange) {
      onChange(inputRef.current);
    }
  };

  return (
    <label className="custom-checkbox">
      <input
        type="checkbox"
        ref={inputRef}
        onChange={handleOnChange}
        checked={checked}
      />
      <span className="custom-checkbox__checkmark">
        <i className="bx bx-check"></i>
      </span>
      {label}
    </label>
  );
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Checkbox;
