import classes from "../../sass/pages/discover.module.scss";

export default function GuidingPrinciple() {
  return (
    <section className={classes["principle"]}>
      <div className={classes["principle--box"]}>
        <h2 className={classes["principle--title"]}>Our Guiding Principle</h2>
        <p className={classes["principle--desc"]}>
          Living life with unwavering faith and joy, <br />
          as the
          <span className={classes["principle--em"]}> lotus</span> does, <br />
          to ensure the most beautiful revival
        </p>
      </div>
    </section>
  );
}
