import { useState } from "react";

const FormRow = (props) => {
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
      <div className="input-alert">
        <input
          id={props.name}
          {...props}
          className={`form-input ${props.type === "file" && "file-input"}`}
          focused={focused.toString()}
          required={props.type !== "file"}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
        <small className="form-alert">please provide value</small>
      </div>
    </div>
  );
};

export default FormRow;
