import { Fragment } from "react";

export default function DescriptionSection(props) {
  return (
    <Fragment>
      <div className={props.classes[props.baseClass]} />
      <div className={props.classes[`${props.baseClass}--img`]} />
      <div className={props.classes[`${props.baseClass}--aside`]}>
        <div className={props.classes[`${props.baseClass}--aside--box`]}>
          <h2 className={props.classes[`${props.baseClass}--aside--title`]}>
            {props.title}
          </h2>
            {props.content}
        </div>
      </div>
    </Fragment>
  );
}
