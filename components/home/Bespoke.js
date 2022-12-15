import classes from "../../sass/pages/home.module.scss";
import LinkButton from "../ui/LinkButton";

export default function Bespoke() {
  return (
    <section className={classes["z-layout"]}>
      <div className={`${classes["z-layout--img"]} ${classes["bespoke--img"]}`} />
      <div className={classes["z-layout--article"]}>
        <div className={classes["z-layout--article--box"]}>
          <h2 className={classes["z-layout--article--title"]}>Bespoke</h2>
          <h3 className={classes["z-layout--article--secondary-title"]}>
            All of us deserve the best
          </h3>
          <p className={classes["z-layout--article--desc"]}>
            That is why, we curate small-group retreats with end-to-end
            butler-grade service, to provide you with an transformative wellness
            experience. Your role is to show up, sit back and unwind &#8212; we
            take care of the rest.
          </p>
          <LinkButton btnClass={classes["z-layout--article--btn"]} href="/new">
            Book Now
          </LinkButton>
        </div>
      </div>
    </section>
  );
}

