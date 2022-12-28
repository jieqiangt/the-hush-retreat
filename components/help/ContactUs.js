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
        inputType="text"
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
        inputType="text"
        inputName="contact-us--form--last-name"
        inputPlaceholder="Last Name"
        inputGroupClass={props.classes[`${props.baseClass}--form--last-name`]}
        inputClass={props.classes[`${props.baseClass}--form--last-name--input`]}
        labelClass={props.classes[`${props.baseClass}--form--last-name--label`]}
      />
      <InputBar
        label="Email"
        inputType="email"
        inputName="contact-us--form--email"
        inputPlaceholder="Email"
        inputGroupClass={props.classes[`${props.baseClass}--form--email`]}
        inputClass={props.classes[`${props.baseClass}--form--email--input`]}
        labelClass={props.classes[`${props.baseClass}--form--email--label`]}
      />
      <InputBar
        label="Subject"
        inputType="text"
        inputName="contact-us--form--subject"
        inputPlaceholder="Subject"
        inputGroupClass={props.classes[`${props.baseClass}--form--subject`]}
        inputClass={props.classes[`${props.baseClass}--form--subject--input`]}
        labelClass={props.classes[`${props.baseClass}--form--subject--label`]}
      />
      <InputBar
        label="Message"
        inputType="textarea"
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

  return (
    <DescriptionSection
      classes={props.classes}
      baseClass={props.baseClass}
      title="Connect with us"
      content={content}
    />
  );
}

{
  /* <InputBar
label="No. of Retreatees"
inputType="number"
inputName="contact-us--form--num-retreatees"
inputPlaceholder="No. of Retreatees"
inputGroupClass={classes["contact-us--form--num-retreatees"]}
inputClass={classes["contact-us--form--num-retreatees--input"]}
labelClass={classes["contact-us--form--num-retreatees--label"]}
datalistId="num-retreatees-list"
datalist={["1", "2", "3", "4", "5", "6"]}
/>
<InputSelect
label="Retreat Name"
inputName="contact-us--form--retreat-name"
inputGroupClass={classes["contact-us--form--retreat-name"]}
inputClass={classes["contact-us--form--retreat-name--input"]}
labelClass={classes["contact-us--form--retreat-name--label"]}
inputOptions={retreatsList.map((item) => (
  <option value={item.retreatId}>{item.retreatName}</option>
))}
/> */
}

{
  /* <div className={props.classes[`${props.baseClass}`]}>
  <div className={props.classes[`${props.baseClass}--img`]} />
  <form action="#" className={props.classes[`${props.baseClass}--form`]}>
    <h2 className={props.classes[`${props.baseClass}--form--title`]}>Connect with us</h2>
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
      inputType="text"
      inputName="contact-us--form--first-name"
      inputPlaceholder="First Name"
      inputGroupClass={props.classes[`${props.baseClass}--form--first-name`]}
      inputClass={props.classes[`${props.baseClass}--form--first-name--input`]}
      labelClass={props.classes[`${props.baseClass}--form--first-name--label`]}
    />
    <InputBar
      label="Last Name"
      inputType="text"
      inputName="contact-us--form--last-name"
      inputPlaceholder="Last Name"
      inputGroupClass={props.classes[`${props.baseClass}--form--last-name`]}
      inputClass={props.classes[`${props.baseClass}--form--last-name--input`]}
      labelClass={props.classes[`${props.baseClass}--form--last-name--label`]}
    />
    <InputBar
      label="Email"
      inputType="email"
      inputName="contact-us--form--email"
      inputPlaceholder="Email"
      inputGroupClass={props.classes[`${props.baseClass}--form--email`]}
      inputClass={props.classes[`${props.baseClass}--form--email--input`]}
      labelClass={props.classes[`${props.baseClass}--form--email--label`]}
    />
    <InputBar
      label="Subject"
      inputType="text"
      inputName="contact-us--form--subject"
      inputPlaceholder="Subject"
      inputGroupClass={props.classes[`${props.baseClass}--form--subject`]}
      inputClass={props.classes[`${props.baseClass}--form--subject--input`]}
      labelClass={props.classes[`${props.baseClass}--form--subject--label`]}
    />
    <InputBar
      label="Message"
      inputType="textarea"
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
</div> */
}
