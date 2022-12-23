import { Fragment } from "react";

export default function InputBar(props) {
  return (
    <Fragment>
      <div className={props.inputGroupClass}>
        {props.inputType === "textarea" ? (
          <textarea
            name={props.inputName}
            id={props.inputName}
            className={props.inputClass}
            placeholder={props.inputPlaceholder}
            rows={props.rows}
          />
        ) : (
          <input
            type={props.inputType}
            name={props.inputName}
            id={props.inputName}
            className={props.inputClass}
            placeholder={props.inputPlaceholder}
          />
        )}
        <label htmlFor={props.inputName} className={props.labelClass}>
          {props.label}
        </label>
      </div>
    </Fragment>
  );
}


