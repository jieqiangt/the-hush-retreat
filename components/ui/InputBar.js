import { Fragment } from "react";

export default function InputBar(props) {
  return (
    <Fragment>
      <div className={props.inputGroupClass}>
        {(props.type === "text") | (props.type === "email") ? (
          <Fragment>
            <input
              type={props.type}
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
        {props.type === "textarea" ? (
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
        {props.type === "number" ? (
          <Fragment>
            <input
              type="text"
              inputMode="numeric"
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
                <option key={item} value={item}>{item}</option>
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
