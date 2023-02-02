import { Fragment } from "react";

export default function DescriptionSection(props) {
  const { classes, baseClass, img, title, content } = props;

  return (
    <section className={classes[baseClass]}>
      {img}
      <div className={`${classes[`${baseClass}--aside`]}`}>
        <div className={`${classes[`${baseClass}--aside--box`]} hidden`}>
          <h2 className={classes[`${baseClass}--aside--title`]}>{title}</h2>
          {content}
        </div>
      </div>
    </section>
  );
}
