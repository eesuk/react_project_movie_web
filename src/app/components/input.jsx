import React from "react";
import PropTypes from "prop-types";

import { StyledInput } from "./fromstyle";

const Input = ({ label, name, type, value, onChange }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <StyledInput
        type={type}
        id={name}
        value={value}
        onChange={onChange}
        name={name}
      ></StyledInput>
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
