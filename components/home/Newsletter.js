import classes from "../../sass/pages/home.module.scss";
import LinkButton from "../ui/LinkButton";
import InputBar from "../ui/InputBar";
import Icon from "../ui/Icon";
import Link from "next/link";

export default function NewsLetter() {
  return (
    <section className={classes["newsletter"]}>
      <div className={classes["newsletter--signup"]}>
        <div className={classes["newsletter--signup--box"]}>
          <Icon
            iconClass={classes["newsletter--signup--icon"]}
            iconName="icon-logo-words-right"
          />
          <h2 className={classes["newsletter--signup--title"]}>
            Stay in the loop
          </h2>
          <form action="#" className={classes["newsletter--signup--form"]}>
            <InputBar
              label="Email"
              inputType="email"
              inputName="newsletter--form--signup--email"
              inputPlaceholder="Email"
              inputGroupClass={classes["newsletter--signup--input-group"]}
              inputClass={classes["newsletter--signup--input-group--input"]}
              labelClass={classes["newsletter--signup--input-group--label"]}
            />
            <button className={classes["newsletter--signup--input-group--btn"]}>
              Sign Up
            </button>
          </form>
          <h3 className={classes["newsletter--signup--title"]}>Follow Us</h3>
          <div className={classes["newsletter--signup--socials"]}>
            <Link href="https://www.facebook.com/thehushretreat">
              <Icon
                iconClass={classes["newsletter--signup--socials--icon"]}
                iconName="icon-fb"
              />
            </Link>
            <Link href="https://www.instagram.com/thehushretreats/">
              <Icon
                iconClass={classes["newsletter--signup--socials--icon"]}
                iconName="icon-ig"
              />
            </Link>
          </div>
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
      <div className={classes["newsletter--img"]} />
    </section>
  );
}
