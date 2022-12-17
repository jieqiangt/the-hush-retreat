import { Fragment } from "react";
import classes from "../../sass/pages/home.module.scss";

export default function InputSingleBar(props) {
  return (
    <Fragment>
      <div className={props.inputGroupClass}>
        <input
          type={props.inputType}
          name={props.inputName}
          id={props.inputName}
          className={props.inputClass}
          placeholder={props.inputPlaceholder}
        />
        <label for={props.inputName} className={props.labelClass}>
          {props.label}
        </label>
      </div>
    </Fragment>
  );
}
