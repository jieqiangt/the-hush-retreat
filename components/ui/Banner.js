import { Fragment } from "react";

export default function Banner(props) {
  const { classes, baseClass, title, caption, bannerDetails } = props;

  return (
    <Fragment>
      <section className={classes[baseClass]}></section>
      <div className={`${classes[`${baseClass}--box`]} hidden`}>
        <h2 className={classes[`${baseClass}--title`]}>{title}</h2>
        <h3 className={classes[`${baseClass}--caption`]}>{caption}</h3>
        {bannerDetails}
      </div>
    </Fragment>
  );
}
