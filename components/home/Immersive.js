import classes from "../../sass/pages/home.module.scss";
import LinkButton from "../ui/LinkButton";

export default function Immersive() {
  return (
    <section className={classes["z-layout"]}>
      <div
        className={`${classes["z-layout--article"]} ${classes["z-layout--article--left"]}`}
      >
        <div className={classes["z-layout--article--box"]}>
          <h2 className={classes["z-layout--article--title"]}>Immersive</h2>
          <h3 className={classes["z-layout--article--secondary-title"]}>
            Imbue unique & novel intricacies into your wellness practice
          </h3>
          <p className={classes["z-layout--article--desc"]}>
            Explore a wide range of multi-dimensional, immersive experiences,
            from sound to cacao, carefully designed to maximise your practice.
          </p>
          <LinkButton btnClass={classes["z-layout--article--btn"]} href="/new">
            Explore More
          </LinkButton>
        </div>
      </div>
      <div className={`${classes["z-layout--img"]} ${classes["immersive--img"]}`} />
    </section>
  );
}
