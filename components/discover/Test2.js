import classes from "../../sass/pages/discover.module.scss";

export default function Test2() {
  return (
    <section className={classes["test-2"]}>
      <div className={classes["test-2--box"]}>
        <h2 className={classes["test-2--title"]}>Our Guiding Principle</h2>
        <p className={classes["test-2--desc"]}>
          Living life with unwavering faith and joy, <br />
          as the
          <span className={classes["test-2--em"]}> lotus</span> does, <br />
          to ensure the most beautiful revival
        </p>
      </div>
    </section>
  );
}
