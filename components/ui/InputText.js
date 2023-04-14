import { Fragment } from "react";

export default function InputBar(props) {
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
    rows, //only for text area type
    inputRef,
  } = props;

  let inputReturn;

  if (type === "text" || type === "email") {
    inputReturn = (
      <Fragment>
        <input
          type={type}
          name={inputName}
          value={value}
          id={inputName}
          className={inputClass}
          onChange={onChange}
          placeholder={inputPlaceholder}
          ref={inputRef}
        />
        <label htmlFor={inputName} className={labelClass}>
          {label}
        </label>
        {!valid ? <span>{invalidText}</span> : ""}
      </Fragment>
    );
  }

  if (type === "textarea") {
    inputReturn = (
      <Fragment>
        <textarea
          name={inputName}
          id={inputName}
          value={value}
          onChange={onChange}
          className={inputClass}
          placeholder={inputPlaceholder}
          rows={rows}
          ref={inputRef}
        />
        <label htmlFor={inputName} className={labelClass}>
          {label}
        </label>
        {!valid ? <span>{invalidText}</span> : ""}
      </Fragment>
    );
  }

  return <div className={inputGroupClass}>{inputReturn}</div>;
}
