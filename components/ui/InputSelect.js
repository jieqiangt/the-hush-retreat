import { Fragment } from "react";

export default function InputSelect(props) {
  return (
    <Fragment>
      <div className={props.inputGroupClass}>
        <select
          name={props.inputName}
          id={props.inputName}
          className={props.inputClass}
        >
          {props.inputOptions}
        </select>
        <label inputType="select" htmlFor={props.inputName} className={props.labelClass}>
          {props.label}
        </label>
      </div>
    </Fragment>
  );
}
