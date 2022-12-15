import { Fragment } from "react";
import classes from "../../sass/pages/home.module.scss";

export default function InputText(props) {
  return (
    <Fragment>
      <input
        type="text"
        name={props.inputName}
        id={props.inputName}
        inputClass={props.inputClass}
      />
      <label for={props.inputName} labelClass={props.inputClass}>
        {props.label}
      </label>
    </Fragment>
  );
}
