import classes from "../../sass/pages/home.module.scss";
import LinkButton from "../ui/LinkButton";

export default function Immersive() {
  return (
    <section className={classes["immersive"]}>
      <div
        className={`${classes["immersive--article"]} ${classes["immersive--article--left"]}`}
      >
        <div className={classes["immersive--article--box"]}>
          <h2 className={classes["immersive--article--title"]}>Immersive</h2>
          <h3 className={classes["immersive--article--secondary-title"]}>
            Imbue unique & novel intricacies into your wellness practice
          </h3>
          <p className={classes["immersive--article--desc"]}>
            Explore a wide range of multi-dimensional, immersive experiences,
            from sound to cacao, carefully designed to maximise your practice.
          </p>
          <LinkButton btnClass={classes["immersive--article--btn"]} href="/new">
            Explore More
          </LinkButton>
        </div>
      </div>
      <div
        className={`${classes["immersive--img"]} ${classes["immersive--img"]}`}
      />
    </section>
  );
}
