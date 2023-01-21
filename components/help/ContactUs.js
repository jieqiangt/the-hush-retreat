import Link from "next/link";
import DescriptionSection from "../ui/DescriptionSection";
import InputBar from "../ui/InputBar";

export default function ContactUs(props) {

  const { baseClass, classes } = props;
  
  const content = (
    <form action="#" className={classes[`${baseClass}--form`]}>
      <article className={classes[`${baseClass}--form--article`]}>
        Having a burning question for a retreat or looking to collaborate with
        us? <br />
        Do drop us a message using the form below or through email at
        hello@thehushretreats.com. <br />
        If you have a general question, we may have answered it in our{" "}
        <Link href="#faq">FAQ section</Link> below. <br />
      </article>
      <InputBar
        label="First Name"
        type="text"
        inputName="contact-us--form--first-name"
        inputPlaceholder="First Name"
        inputGroupClass={classes[`${baseClass}--form--first-name`]}
        inputClass={
          classes[`${baseClass}--form--first-name--input`]
        }
        labelClass={
          classes[`${baseClass}--form--first-name--label`]
        }
      />
      <InputBar
        label="Last Name"
        type="text"
        inputName="contact-us--form--last-name"
        inputPlaceholder="Last Name"
        inputGroupClass={classes[`${baseClass}--form--last-name`]}
        inputClass={classes[`${baseClass}--form--last-name--input`]}
        labelClass={classes[`${baseClass}--form--last-name--label`]}
      />
      <InputBar
        label="Email"
        type="email"
        inputName="contact-us--form--email"
        inputPlaceholder="Email"
        inputGroupClass={classes[`${baseClass}--form--email`]}
        inputClass={classes[`${baseClass}--form--email--input`]}
        labelClass={classes[`${baseClass}--form--email--label`]}
      />
      <InputBar
        label="Subject"
        type="text"
        inputName="contact-us--form--subject"
        inputPlaceholder="Subject"
        inputGroupClass={classes[`${baseClass}--form--subject`]}
        inputClass={classes[`${baseClass}--form--subject--input`]}
        labelClass={classes[`${baseClass}--form--subject--label`]}
      />
      <InputBar
        label="Message"
        type="textarea"
        inputName="contact-us--form--message"
        inputPlaceholder="Message"
        inputGroupClass={classes[`${baseClass}--form--message`]}
        inputClass={classes[`${baseClass}--form--message--input`]}
        labelClass={classes[`${baseClass}--form--message--label`]}
        rows="8"
      />
      <button className={classes[`${baseClass}--form--btn`]}>
        Send Message
      </button>
    </form>
  );

  const img = <div className={`${classes[`${baseClass}--img`]} hidden`} />;

  return (
    <DescriptionSection
      classes={classes}
      baseClass={baseClass}
      title="Connect with us"
      content={content}
      img={img}
    />
  );
}


