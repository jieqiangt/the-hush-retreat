import LinkButton from "../ui/LinkButton";
import InputBar from "../ui/InputBar";
import Icon from "../ui/Icon";
import Link from "next/link";

export default function NewsLetter(props) {
  return (
    <section className={props.classes[`${props.baseClass}`]}>
      <div className={props.classes[`${props.baseClass}--signup`]}>
        <div className={props.classes[`${props.baseClass}--signup--box`]}>
          <Icon
            iconClass={props.classes[`${props.baseClass}--signup--icon`]}
            iconName="icon-logo-words-right"
          />
          <h2 className={props.classes[`${props.baseClass}--signup--title`]}>
            Stay in the loop
          </h2>
          <form action="#" className={props.classes[`${props.baseClass}--signup--form`]}>
            <InputBar
              label="Email"
              inputType="email"
              inputName="newsletter--form--signup--email"
              inputPlaceholder="Email"
              inputGroupClass={props.classes[`${props.baseClass}--signup--input-group`]}
              inputClass={props.classes[`${props.baseClass}--signup--input-group--input`]}
              labelClass={props.classes[`${props.baseClass}--signup--input-group--label`]}
            />
            <button className={props.classes[`${props.baseClass}--signup--input-group--btn`]}>
              Sign Up
            </button>
          </form>
          <h3 className={props.classes[`${props.baseClass}--signup--title`]}>Follow Us</h3>
          <div className={props.classes[`${props.baseClass}--signup--socials`]}>
            <Link href="https://www.facebook.com/thehushretreat">
              <Icon
                iconClass={props.classes[`${props.baseClass}--signup--socials--icon`]}
                iconName="icon-fb"
              />
            </Link>
            <Link href="https://www.instagram.com/thehushretreats/">
              <Icon
                iconClass={props.classes[`${props.baseClass}--signup--socials--icon`]}
                iconName="icon-ig"
              />
            </Link>
          </div>
          <h3 className={props.classes[`${props.baseClass}--signup--title`]}>
            Burning questions?
          </h3>
          <LinkButton
            href="/contact"
            btnClass={props.classes[`${props.baseClass}--signup--btn--link`]}
          >
            Contact Us
          </LinkButton>
        </div>
      </div>
      <div className={props.classes[`${props.baseClass}--img`]} />
    </section>
  );
}
