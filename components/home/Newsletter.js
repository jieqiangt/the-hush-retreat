import classes from "../../sass/pages/home.module.scss";
import LinkButton from "../ui/LinkButton";
import InputSingleBar from "../ui/InputSingleBar";

export default function NewsLetter() {
  return (
    <section className={classes["newsletter"]}>
      <div className={classes["newsletter--signup"]}>
        <div className={classes["newsletter--signup--box"]}>
          <h2 className={classes["newsletter--signup--title"]}>
            Stay in the loop
          </h2>
          <form action="#" className={classes["newsletter--signup--form"]}>
            <InputSingleBar
              label="Email"
              inputType="email"
              inputName="newsletter--form--signup--email"
              inputPlaceholder="Email"
              inputGroupClass={classes["newsletter--signup--input-group"]}
              inputClass={classes["newsletter--signup--input"]}
              labelClass={classes["newsletter--signup--label"]}
            />
            <button className={classes["newsletter--signup--btn"]}>
              Sign Up
            </button>
          </form>
          <h3 className={classes["newsletter--signup--title"]}>Follow Us</h3>
          <div className={classes["newsletter--signup--socials"]}></div>
          <h3 className={classes["newsletter--signup--title"]}>
            Burning questions?
          </h3>
          <LinkButton
            href="/contact"
            btnClass={classes["newsletter--signup--btn--link"]}
          >
            Contact Us
          </LinkButton>
        </div>
      </div>
      <div
        className={classes["newsletter--img"]}
      />
    </section>
  );
}
