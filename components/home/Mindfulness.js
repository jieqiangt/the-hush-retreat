import classes from "../../sass/pages/home.module.scss";
import LinkButton from "../ui/LinkButton";

export default function Mindfulness() {
  return (
    <section className={classes["mindfulness"]}>
      <div className={`${classes["mindfulness--img"]} ${classes["mindfulness--img"]}`} />
      <div className={classes["mindfulness--article"]}>
        <div className={classes["mindfulness--article--box"]}>
          <h2 className={classes["mindfulness--article--title"]}>Mindfulness</h2>
          <h3 className={classes["mindfulness--article--secondary-title"]}>
            Step away from the chatter & stresses of everyday life
          </h3>
          <p className={classes["mindfulness--article--desc"]}>
            Based on our unique philosophy, we aim to provie you with a
            sanctuary to rest your mind, nourish your body, and practice
            mindfulness.
          </p>
          <LinkButton btnClass={classes["mindfulness--article--btn"]} href="/discover">
            Discover More
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
