import classes from "../../sass/pages/home.module.scss";
import LinkButton from "../ui/LinkButton";

export default function Mindfulness() {
  return (
    <section className={classes["z-layout"]}>
      <div className={`${classes["z-layout--img"]} ${classes["mindfulness--img"]}`} />
      <div className={classes["z-layout--article"]}>
        <div className={classes["z-layout--article--box"]}>
          <h2 className={classes["z-layout--article--title"]}>Mindfulness</h2>
          <h3 className={classes["z-layout--article--secondary-title"]}>
            Step away from the chatter & stresses of everyday life
          </h3>
          <p className={classes["z-layout--article--desc"]}>
            Based on our unique philosophy, we aim to provie you with a
            sanctuary to rest your mind, nourish your body, and practice
            mindfulness.
          </p>
          <LinkButton btnClass={classes["z-layout--article--btn"]} href="/new">
            Discover More
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
