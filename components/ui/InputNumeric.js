import { Fragment } from "react";

export default function InputNumeric(props) {
  const {
    type,
    inputGroupClass,
    inputName,
    value,
    inputClass,
    onChange,
    inputPlaceholder,
    labelClass,
    label,
    valid,
    invalidText,
    datalist,
    datalistId,
    inputRef,
  } = props;

  let inputReturn;

  if (type === "number") {
    inputReturn = (
      <Fragment>
        <input
          type="text"
          inputMode="numeric"
          pattern="\d*"
          name={inputName}
          id={inputName}
          value={value}
          onChange={onChange}
          className={inputClass}
          placeholder={inputPlaceholder}
          list={datalistId}
          ref={inputRef}
        />
        <label htmlFor={inputName} className={labelClass}>
          {label}
        </label>
        <datalist id={datalistId}>
          {datalist.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </datalist>
        {!valid ? <span>{invalidText}</span> : ""}
      </Fragment>
    );
  }

  return <div className={inputGroupClass}>{inputReturn}</div>;
}
