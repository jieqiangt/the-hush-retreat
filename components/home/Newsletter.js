import classes from "../../sass/pages/home.module.scss";
import LinkButton from "../ui/LinkButton";
import InputText from "../ui/InputText";

export default function NewsLetter() {
  return (
    <section className={classes["newsletter"]}>
      <div className={classes["newsletter--signup"]}>
        <div className={classes["newsletter--signup--box"]}>
          <h2 className={classes["newsletter--signup--title"]}>Follow Us</h2>
          <h2 className={classes["newsletter--signup--title"]}>
            Stay in the loop
          </h2>
          <InputText
            label="Email"
            inputName="newsletter--form--signup--email"
            inputClass={classes["newsletter--signup--input"]}
            labelClass={classes["newsletter--signup--label"]}
          />
          <h2 className={classes["newsletter--signup--title"]}>Reach out to us</h2>
        </div>
      </div>
      <div
        className={`${classes["z-layout--img"]} ${classes["newsletter--img"]}`}
      />
    </section>
  );
}
