import LinkButton from "../ui/LinkButton";
import InputText from "../ui/InputText";
import Icon from "../ui/Icon";
import Link from "next/link";
import { useContext, useRef, useState } from "react";
import { callApi } from "../../utils/apiUtils";
import NotificationContext from "../../store/notificationContext";
import { validateField } from "../../reducers/formReducer";

export default function NewsLetter(props) {
  const { baseClass, classes } = props;

  const [emailValid, setEmailValid] = useState(true);
  const notificationCtx = useContext(NotificationContext);
  const emailRef = useRef();

  async function subscribeHandler(event) {
    event.preventDefault();

    if (!validateField(emailRef.current.value, "email")) {
      setEmailValid(() => false);
      return;
    } else {
      setEmailValid(() => true);
    }

    const result = await callApi({
      url: "/api/registerNewsletter",
      method: "POST",
      body: {
        email: emailRef.current.value,
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
        url: "/api/sendNewsLetterConfirmation",
        method: "POST",
        body: {
          email: emailRef.current.value,
          idToUpdate: successNotification.insertedId,
        },
      });
    }

    emailRef.current.value = "";
  }

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
              inputRef={emailRef}
              inputName="newsletter--form--signup--email"
              inputPlaceholder="Email"
              inputGroupClass={classes[`${baseClass}--signup--input-group`]}
              inputClass={classes[`${baseClass}--signup--input-group--input`]}
              labelClass={classes[`${baseClass}--signup--input-group--label`]}
              valid={emailValid}
              invalidText="A valid email is required."
            />
            <LinkButton
              btnClass={classes[`${baseClass}--signup--input-group--btn`]}
              onClick={subscribeHandler}
            >
              Sign Up
            </LinkButton>
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
            href="/help"
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
