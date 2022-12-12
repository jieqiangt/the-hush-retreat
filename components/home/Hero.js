import { Fragment } from "react";
import LinkButton from "../ui/LinkButton";
import classes from "../../sass/pages/home.module.scss";

export default function Hero() {
  return (
    <Fragment>
      <section className={classes["hero"]}>
        <div className={classes["hero--box"]}>
          <h1 className={classes["section--title"]}>Modern Wellness Lifestyle</h1>
          <article className={classes["hero--article"]}>
            Luxurious tranquil retreats.<br />
            Embrace mindfulness. <br />
            Transformative experience.
          </article>
        </div>
        <LinkButton href="/new">Start Healing Now</LinkButton>
      </section>

    </Fragment>
  );
}
