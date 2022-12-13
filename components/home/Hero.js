import { Fragment } from "react";
import LinkButton from "../ui/LinkButton";
import classes from "../../sass/pages/home.module.scss";

export default function Hero() {
  return (
    <Fragment>
      <section className={classes["hero"]}>
        <div className={classes["hero--box"]}>
          <h2 className={classes["hero--title"]}>Modern Wellness Lifestyle</h2>
          <article className={classes["hero--article"]}>
            Luxurious tranquil retreats,
            <br />
            embrace mindfullness,
            <br />
            for your inner soul
          </article>
          <LinkButton href="/new" btnClass={classes["hero--btn"]}>
            Start Healing Now
          </LinkButton>
        </div>
      </section>
    </Fragment>
  );
}
