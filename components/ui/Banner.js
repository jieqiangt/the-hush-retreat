import { Fragment } from "react";

export default function Banner(props) {
  return (
    <Fragment>
      <section className={props.classes[props.baseClass]}></section>
      <div className={`${props.classes[`${props.baseClass}--box`]} hidden`}>
        <h2 className={props.classes[`${props.baseClass}--title`]}>
          {props.title}
        </h2>
        <h3 className={props.classes[`${props.baseClass}--caption`]}>
          {props.caption}
        </h3>
        {props.bannerDetails}
      </div>
    </Fragment>
  );
}
