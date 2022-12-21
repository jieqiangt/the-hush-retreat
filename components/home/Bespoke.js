import classes from "../../sass/pages/home.module.scss";
import LinkButton from "../ui/LinkButton";

export default function Bespoke() {
  return (
    <section className={classes["bespoke"]}>
      <div className={`${classes["bespoke--img"]} ${classes["bespoke--img"]}`} />
      <div className={classes["bespoke--article"]}>
        <div className={classes["bespoke--article--box"]}>
          <h2 className={classes["bespoke--article--title"]}>Bespoke</h2>
          <h3 className={classes["bespoke--article--secondary-title"]}>
            All of us deserve the best
          </h3>
          <p className={classes["bespoke--article--desc"]}>
            That is why, we curate small-group retreats with end-to-end
            butler-grade service, to provide you with an transformative wellness
            experience. Your role is to show up, sit back and unwind &#8212; we
            take care of the rest.
          </p>
          <LinkButton btnClass={classes["bespoke--article--btn"]} href="/new">
            Book Now
          </LinkButton>
        </div>
      </div>
    </section>
  );
}

