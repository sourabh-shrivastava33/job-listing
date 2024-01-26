import React, { useState } from "react";

const FormRowTextArea = (props) => {
  const [focused, setFocused] = useState(false);
  const handleBlur = () => {
    setFocused(true);
  };
  const handleFocus = () => {
    setFocused(false);
  };
  return (
    <div className="form-row">
      {props.label && (
        <label htmlFor={props.name} className="form-label">
          {props.label}
        </label>
      )}
      <div className="input-alert ">
        <textarea
          id={props.name}
          {...props}
          className="form-input text-area"
          focused={focused.toString()}
          required
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
        <small className="form-alert">please provide value</small>
      </div>
    </div>
  );
};

export default FormRowTextArea;
