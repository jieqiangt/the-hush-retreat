import { Fragment } from "react";

export default function DescriptionSection(props) {
  return (
    <Fragment>
      <div className={props.classes[props.baseClass]} />
      <div className={props.classes[`${props.baseClass}--img`]} />
      <div className={props.classes[`${props.baseClass}--article`]}>
        <div className={props.classes[`${props.baseClass}--article--box`]}>
          <h2 className={props.classes[`${props.baseClass}--article--title`]}>
            {props.title}
          </h2>
          <article
            className={props.classes[`${props.baseClass}--article--desc`]}
          >
            {props.desc}
          </article>
        </div>
      </div>
    </Fragment>
  );
}
