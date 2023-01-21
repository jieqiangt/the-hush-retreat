import { Fragment } from "react";

export default function InputSelect(props) {
  const {
    inputGroupClass,
    inputName,
    inputClass,
    value,
    onChange,
    inputOptions,
    labelClass,
    label,
  } = props;

  return (
    <Fragment>
      <div className={inputGroupClass}>
        <select
          name={inputName}
          id={inputName}
          className={inputClass}
          value={value}
          onChange={onChange}
        >
          {inputOptions}
        </select>
        <label htmlFor={inputName} className={labelClass}>
          {label}
        </label>
      </div>
    </Fragment>
  );
}
