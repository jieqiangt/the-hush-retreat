import LinkButton from "../ui/LinkButton";
import InputText from "../ui/InputText";
import Icon from "../ui/Icon";
import Link from "next/link";

export default function NewsLetter(props) {
  const { baseClass, classes } = props;
  return (
    <section className={classes[`${baseClass}`]}>
      <div className={classes[`${baseClass}--signup`]}>
        <div className={classes[`${baseClass}--signup--box`]}>
          <Icon
            iconClass={`${classes[`${baseClass}--signup--icon`]} hidden`}
            iconName="icon-logo-words-right"
          />
          <h2 className={`${classes[`${baseClass}--signup--title`]} hidden`}>
            Stay in the loop
          </h2>
          <form
            action="#"
            className={`${classes[`${baseClass}--signup--form`]} hidden`}
          >
            <InputText
              label="Email"
              type="email"
              inputName="newsletter--form--signup--email"
              inputPlaceholder="Email"
              inputGroupClass={classes[`${baseClass}--signup--input-group`]}
              inputClass={classes[`${baseClass}--signup--input-group--input`]}
              labelClass={classes[`${baseClass}--signup--input-group--label`]}
            />
            <button
              className={classes[`${baseClass}--signup--input-group--btn`]}
            >
              Sign Up
            </button>
          </form>
          <h3 className={`${classes[`${baseClass}--signup--title`]} hidden`}>
            Follow Us
          </h3>
          <div className={`${classes[`${baseClass}--signup--socials`]} hidden`}>
            <Link href="https://www.facebook.com/thehushretreat">
              <Icon
                iconClass={classes[`${baseClass}--signup--socials--icon`]}
                iconName="icon-fb"
              />
            </Link>
            <Link href="https://www.instagram.com/thehushretreats/">
              <Icon
                iconClass={classes[`${baseClass}--signup--socials--icon`]}
                iconName="icon-ig"
              />
            </Link>
          </div>
          <h3 className={`${classes[`${baseClass}--signup--title`]} hidden`}>
            FOR ANY QUERIES
          </h3>
          <LinkButton
            href="/contact"
            btnClass={`${classes[`${baseClass}--signup--btn--link`]} hidden`}
          >
            Contact Us
          </LinkButton>
        </div>
      </div>
      <div className={`${classes[`${baseClass}--img`]} hidden`} />
    </section>
  );
}
