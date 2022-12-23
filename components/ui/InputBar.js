import { Fragment } from "react";

export default function InputBar(props) {
  return (
    <Fragment>
      <div className={props.inputGroupClass}>
        {(props.inputType === "text") | (props.inputType === "email") ? (
          <Fragment>
            <input
              type={props.inputType}
              name={props.inputName}
              id={props.inputName}
              className={props.inputClass}
              placeholder={props.inputPlaceholder}
            />
            <label htmlFor={props.inputName} className={props.labelClass}>
              {props.label}
            </label>
          </Fragment>
        ) : (
          ""
        )}
        {props.inputType === "textarea" ? (
          <Fragment>
            <textarea
              name={props.inputName}
              id={props.inputName}
              className={props.inputClass}
              placeholder={props.inputPlaceholder}
              rows={props.rows}
            />
            <label htmlFor={props.inputName} className={props.labelClass}>
              {props.label}
            </label>
          </Fragment>
        ) : (
          ""
        )}
        {props.inputType === "number" ? (
          <Fragment>
            <input
              type="text"
              inputmode="numeric"
              pattern="\d*"
              name={props.inputName}
              id={props.inputName}
              className={props.inputClass}
              placeholder={props.inputPlaceholder}
              list={props.datalistId}
            />
            <label htmlFor={props.inputName} className={props.labelClass}>
              {props.label}
            </label>
            <datalist id={props.datalistId}>
              {props.datalist.map((item) => (
                <option value={item}>{item}</option>
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
