import classes from "../../sass/pages/discover.module.scss";

export default function Test() {
  return (
    <section className={classes["test"]}>
      <div className={classes["test--article"]}>
        <div className={classes["test--article--box"]}>
          <h2 className={classes["test--article--title"]}>
            Our Guiding Principle
          </h2>
          <p className={classes["test--article--desc"]}>
            Living life with unwavering faith and joy, <br />
            as the{" "}
            <span className={classes["principle--lotus--em"]}>
              lotus{" "}
            </span>does, <br />
            to ensure the most beautiful revival
          </p>
        </div>
      </div>
      <div className={classes["test--img"]} />
    </section>
  );
}
