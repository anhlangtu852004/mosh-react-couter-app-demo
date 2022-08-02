import React from "react";

const InputSelect = ({ name, label, data, onChange, error }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <select
        id={name}
        name={name}
        className="form-select"
        aria-label="Default select example"
        onChange={onChange}
      >
        <option value="" />
        {data.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </>
  );
};

export default InputSelect;
