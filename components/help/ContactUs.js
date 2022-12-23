import classes from "../../sass/pages/help.module.scss";
import InputBar from "../ui/InputBar";

export default function ContactUs() {
  return (
    <div className={classes["contact-us"]}>
      <form action="#" className={classes["contact-us--form"]}>
        <InputBar
          label="First Name"
          inputType="text"
          inputName="contact-us--form--first-name"
          inputPlaceholder="First Name"
          inputGroupClass={classes["contact-us--form--first-name"]}
          inputClass={classes["contact-us--form--first-name--input"]}
          labelClass={classes["contact-us--form--first-name--label"]}
        />
        <InputBar
          label="Last Name"
          inputType="text"
          inputName="contact-us--form--last-name"
          inputPlaceholder="Last Name"
          inputGroupClass={classes["contact-us--form--last-name"]}
          inputClass={classes["contact-us--form--last-name--input"]}
          labelClass={classes["contact-us--form--last-name--label"]}
        />
        <InputBar
          label="Email"
          inputType="email"
          inputName="contact-us--form--email"
          inputPlaceholder="Email"
          inputGroupClass={classes["contact-us--form--email"]}
          inputClass={classes["contact-us--form--email--input"]}
          labelClass={classes["contact-us--form--email--label"]}
        />
        <InputBar
          label="Message"
          inputType="textarea"
          inputName="contact-us--form--message"
          inputPlaceholder="Message"
          inputGroupClass={classes["contact-us--form--message"]}
          inputClass={classes["contact-us--form--message--input"]}
          labelClass={classes["contact-us--form--message--label"]}
          rows="8"
        />
        <button className={classes["contact-us--form--btn"]}>
          Send Message
        </button>
      </form>
    </div>
  );
}
