import React from "react";

const FormRowSelect = (props) => {
  return (
    <div className="form-row">
      {props.label && (
        <label htmlFor={props.name} className="form-label">
          {props.label}
        </label>
      )}
      <div className="input-alert">
        <select
          id={props.name}
          {...props}
          className="form-input form-select"
          required
        >
          {props.list.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FormRowSelect;
