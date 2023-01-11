import { Fragment } from "react";

export default function InputSelect(props) {
  return (
    <Fragment>
      <div className={props.inputGroupClass}>
        <select
          name={props.inputName}
          id={props.inputName}
          className={props.inputClass}
          value={props.value}
          onChange={props.onChange}
        >
          {props.inputOptions}
        </select>
        <label htmlFor={props.inputName} className={props.labelClass}>
          {props.label}
        </label>
      </div>
    </Fragment>
  );
}
