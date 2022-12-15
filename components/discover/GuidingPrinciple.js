import { Fragment } from "react";
import classes from "../../sass/pages/discover.module.scss";

export default function GuidingPrinciple() {
  return (
    <Fragment>
      <section className={classes["principle"]}>
        <h2 className={classes["section--title"]}>Our Guiding Principle</h2>
        <article className={classes["principle--article"]}>
          Living life with unwavering faith and joy, <br />
          as the <span className={classes["principle--lotus--em"]}>lotus </span>
          does, <br />
          to ensure the most beautiful revival
        </article>
      </section>
    </Fragment>
  );
}
