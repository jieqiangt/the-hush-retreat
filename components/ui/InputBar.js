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
    rows,
    datalistId,
    inputRef,
  } = props;
  return (
    <Fragment>
      <div className={inputGroupClass}>
        {type === "text" || type === "email" ? (
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
        ) : (
          ""
        )}
        {type === "textarea" ? (
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
          </Fragment>
        ) : (
          ""
        )}
        {type === "number" ? (
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
          </Fragment>
        ) : (
          ""
        )}
      </div>
    </Fragment>
  );
}
