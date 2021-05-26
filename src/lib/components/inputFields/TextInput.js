import React from "react";
import "./TextInput.css";

const TextInput = ({
  id,
  name,
  type,
  label,
  placeholder,
  value,
  onChange,
  helpText,
  disabled,
  icon
}) => {
  const disabledInput = {
    cursor: "not-allowed",
    pointerEvents: "none",
    backgroundColor: "#F4F5F9"
  };
  const defaultInput = {
    cursor: "pointer"
  };

  return (
    <div className="form-group">
      {label && <label className="text-label">{label}</label>}
      <input
        id={id}
        name={name}
        type={type}
        className={helpText ? "text-input text-input-invalid" : "text-input"}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        placeholder={placeholder}
        style={disabled ? disabledInput : defaultInput}
      />
      {helpText && <small className="form-help-text">{helpText}</small>}
    </div>
  );
};

export default TextInput;
