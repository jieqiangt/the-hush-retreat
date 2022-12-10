import classes from "./sass/discover.module.scss";

export default function GuidingPrinciple() {
  return (
    <section className={classes["principle"]}>
      <span className={classes["principle--page-header"]}>Our Story</span>
      <span className={classes["principle--title"]}>Our Guiding Principle</span>
      <span className={classes["principle--text"]}>
        Living life with unwavering faith and joy, <br />
        as the lotus does, <br />
        to ensure the most beautiful revival
      </span>
    </section>
  );
}
