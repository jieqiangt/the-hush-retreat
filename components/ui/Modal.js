import { Fragment } from "react";

export default function Modal(props) {
  return (
    <div className={props.classes[`${props.baseClass}--modal--bg`]}>
      <div className={props.classes[`${props.baseClass}--modal`]}>
        <Fragment>
          {props.img}
          {props.aside}
        </Fragment>
      </div>
    </div>
  );
}
