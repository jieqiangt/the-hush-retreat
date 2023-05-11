import Link from "next/link";
import DescriptionSection from "../ui/DescriptionSection";
import InputText from "../ui/InputText";
import { useContext, useRef, useState } from "react";
import { callApi } from "../../utils/apiUtils";
import NotificationContext from "../../store/notificationContext";
import { validateField } from "../../reducers/formReducer";
import LinkButton from "../ui/LinkButton";

export default function ContactUs(props) {
  const { baseClass, classes } = props;

  const [emailValid, setEmailValid] = useState(true);
  const [firstNameValid, setFirstNameValid] = useState(true);
  const [lastNameValid, setLastNameValid] = useState(true);
  const [subjectValid, setSubjectValid] = useState(true);
  const [messageValid, setMessageValid] = useState(true);

  const notificationCtx = useContext(NotificationContext);
  const emailRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  async function submitHandler(event) {
    event.preventDefault();

    let escape = 0;

    if (!validateField(emailRef.current.value, "email")) {
      setEmailValid(() => false);
      escape = escape + 1;
    } else {
      setEmailValid(() => true);
    }

    if (!validateField(firstNameRef.current.value, "firstName")) {
      setFirstNameValid(() => false);
      escape = escape + 1;
    } else {
      setFirstNameValid(() => true);
    }

    if (!validateField(lastNameRef.current.value, "lastName")) {
      setLastNameValid(() => false);
      escape = escape + 1;
    } else {
      setLastNameValid(() => true);
    }

    if (!validateField(subjectRef.current.value, "standardString")) {
      setSubjectValid(() => false);
      escape = escape + 1;
    } else {
      setSubjectValid(() => true);
    }

    if (!validateField(messageRef.current.value, "standardString")) {
      setMessageValid(() => false);
      escape = escape + 1;
    } else {
      setMessageValid(() => true);
    }

    if (escape > 0) {
      return;
    }

    const result = await callApi({
      url: "/api/registerContactUsMessage",
      method: "POST",
      body: {
        email: emailRef.current.value,
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        subject: subjectRef.current.value,
        message: messageRef.current.value,
      },
    });

    if (!result.ok) {
      const errorNotification = await result.json();
      notificationCtx.showNotification(errorNotification);
    }

    if (result.ok) {
      const successNotification = await result.json();
      notificationCtx.showNotification(successNotification);

      await callApi({
        url: "/api/sendContactUsConfirmation",
        method: "POST",
        body: {
          email: emailRef.current.value,
          firstName: firstNameRef.current.value,
          lastName: lastNameRef.current.value,
          subject: subjectRef.current.value,
          message: messageRef.current.value,
          referenceId: successNotification.referenceId,
          idToUpdate: successNotification.insertedId,
        },
      });

      emailRef.current.value = "";
      firstNameRef.current.value = "";
      lastNameRef.current.value = "";
      subjectRef.current.value = "";
      messageRef.current.value = "";
    }
  }

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
      <InputText
        label="Email"
        type="email"
        inputRef={emailRef}
        inputName="newsletter--form--signup--email"
        inputPlaceholder="Email"
        inputGroupClass={classes[`${baseClass}--form--email`]}
        inputClass={classes[`${baseClass}--form--email--input`]}
        labelClass={classes[`${baseClass}--form--email--label`]}
        valid={emailValid}
        invalidText="A valid email is required."
      />
      <InputText
        label="First Name"
        type="text"
        inputRef={firstNameRef}
        inputName="contact-us--form--first-name"
        inputPlaceholder="First Name"
        inputGroupClass={classes[`${baseClass}--form--first-name`]}
        inputClass={classes[`${baseClass}--form--first-name--input`]}
        labelClass={classes[`${baseClass}--form--first-name--label`]}
        valid={firstNameValid}
        invalidText="Your first name is required."
      />
      <InputText
        label="Last Name"
        type="text"
        inputRef={lastNameRef}
        inputName="contact-us--form--last-name"
        inputPlaceholder="Last Name"
        inputGroupClass={classes[`${baseClass}--form--last-name`]}
        inputClass={classes[`${baseClass}--form--last-name--input`]}
        labelClass={classes[`${baseClass}--form--last-name--label`]}
        valid={lastNameValid}
        invalidText="Your last name is required."
      />
      <InputText
        label="Subject"
        type="text"
        inputRef={subjectRef}
        inputName="contact-us--form--subject"
        inputPlaceholder="Subject"
        inputGroupClass={classes[`${baseClass}--form--subject`]}
        inputClass={classes[`${baseClass}--form--subject--input`]}
        labelClass={classes[`${baseClass}--form--subject--label`]}
        valid={subjectValid}
        invalidText="A subject is required."
      />
      <InputText
        label="Message"
        type="textarea"
        inputRef={messageRef}
        inputName="contact-us--form--message"
        inputPlaceholder="Message"
        inputGroupClass={classes[`${baseClass}--form--message`]}
        inputClass={classes[`${baseClass}--form--message--input`]}
        labelClass={classes[`${baseClass}--form--message--label`]}
        valid={messageValid}
        invalidText="A message is required."
        rows="8"
      />
      <LinkButton
        btnClass={classes[`${baseClass}--form--btn`]}
        onClick={submitHandler}
      >
        Submit
      </LinkButton>
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
