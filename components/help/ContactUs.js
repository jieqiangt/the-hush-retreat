import Link from "next/link";
import DescriptionSection from "../ui/DescriptionSection";
import InputBar from "../ui/InputBar";

export default function ContactUs(props) {
  const content = (
    <form action="#" className={props.classes[`${props.baseClass}--form`]}>
      <article className={props.classes[`${props.baseClass}--form--article`]}>
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
        inputGroupClass={props.classes[`${props.baseClass}--form--first-name`]}
        inputClass={
          props.classes[`${props.baseClass}--form--first-name--input`]
        }
        labelClass={
          props.classes[`${props.baseClass}--form--first-name--label`]
        }
      />
      <InputBar
        label="Last Name"
        type="text"
        inputName="contact-us--form--last-name"
        inputPlaceholder="Last Name"
        inputGroupClass={props.classes[`${props.baseClass}--form--last-name`]}
        inputClass={props.classes[`${props.baseClass}--form--last-name--input`]}
        labelClass={props.classes[`${props.baseClass}--form--last-name--label`]}
      />
      <InputBar
        label="Email"
        type="email"
        inputName="contact-us--form--email"
        inputPlaceholder="Email"
        inputGroupClass={props.classes[`${props.baseClass}--form--email`]}
        inputClass={props.classes[`${props.baseClass}--form--email--input`]}
        labelClass={props.classes[`${props.baseClass}--form--email--label`]}
      />
      <InputBar
        label="Subject"
        type="text"
        inputName="contact-us--form--subject"
        inputPlaceholder="Subject"
        inputGroupClass={props.classes[`${props.baseClass}--form--subject`]}
        inputClass={props.classes[`${props.baseClass}--form--subject--input`]}
        labelClass={props.classes[`${props.baseClass}--form--subject--label`]}
      />
      <InputBar
        label="Message"
        type="textarea"
        inputName="contact-us--form--message"
        inputPlaceholder="Message"
        inputGroupClass={props.classes[`${props.baseClass}--form--message`]}
        inputClass={props.classes[`${props.baseClass}--form--message--input`]}
        labelClass={props.classes[`${props.baseClass}--form--message--label`]}
        rows="8"
      />
      <button className={props.classes[`${props.baseClass}--form--btn`]}>
        Send Message
      </button>
    </form>
  );

  const img = <div className={`${props.classes[`${props.baseClass}--img`]} hidden`} />;

  return (
    <DescriptionSection
      classes={props.classes}
      baseClass={props.baseClass}
      title="Connect with us"
      content={content}
      img={img}
    />
  );
}


