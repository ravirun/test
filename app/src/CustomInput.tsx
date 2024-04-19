import React, { useState } from "react";

interface CustomInputProps {
  style: any;
  labelStyle: object;
  error: boolean;
  minl: number;
  maxl: number;
  opt: any[];
  label: string;
  type: string;
  title: string;
  placeholder: string;
  disable: boolean;
  required: boolean;
  customChangeFunction: Function;
  errorMessage: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  style,
  labelStyle,
  error,
  minl,
  maxl,
  opt,
  label,
  type,
  title,
  placeholder,
  disable,
  required,
  customChangeFunction,
  errorMessage,
}) => {
    // Function to format currency input
    const formatCurrency = (val: string) => {
        let num = parseFloat(val.replace(/[$,]/g, ''))
        return `$${num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,")}`
    }
  const [val, setVal] = useState<string>(""); // string
  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newVal = e.target.value; // string
    setVal(newVal);
    if(type === 'currency') {
        newVal = formatCurrency(newVal)
    }
    setVal(newVal)
    // call custom function
    if (customChangeFunction) customChangeFunction(newVal);
   
};
  const clearInput = () => {
    setVal(""); // Clear the input field
};
  const renderInput = () => {
    switch (type) {
      case "text":
      case "number":
      case "password":
      case "currency":
        return (
          <>
            <input
              type={type}
              style={style}
              placeholder={placeholder}
              value={val}
              onChange={handleChanges}
              disabled={disable}
              minLength={minl}
              maxLength={maxl}
              required={required}
            />
            <button onClick={clearInput}>Clear</button> {/* Add a clear button */}
          </>
        );
      case "select":
        return (
          <select
            style={style}
            value={val}
            onChange={handleChanges}
            disabled={disable}
            required={required}
          >
            {opt.map((opt) => (
              <option key={opt.val} value={opt.val}>
                {opt.label}
              </option>
            ))}
          </select>
        );
      case "radio":
        return opt.map((opt) => (
          <label key={opt.val} style={labelStyle}>
            <input
              type="radio"
              value={opt.val}
              checked={opt.val === val}
              onChange={handleChanges}
              disabled={disable}
              required={required}
            />
            {opt.label}
          </label>
        ));
      case "checkbox":
        return (
          <input
            type="checkbox"
            checked={val as unknown as boolean}
            onChange={handleChanges}
            disabled={disable}
            required={required}
          />
        );
      default:
        return null;
    }
  };
  return (
    <>
      <label style={labelStyle}>{title}</label>
      {renderInput()}
      {error && <span>{errorMessage}</span>}
    </>
  );
};

// Comment: To use this CustomInput component, pass in the necessary props as defined in the destructured object.

export default CustomInput;
