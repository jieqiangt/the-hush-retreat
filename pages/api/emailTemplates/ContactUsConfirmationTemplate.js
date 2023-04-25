import { Fragment } from "react";

export default function ContactUsConfirmationTemplate(props) {
  const { firstName, lastName, message, referenceId } = props;

  return (
    <Fragment>
      <h1>{`Hi ${firstName} ${lastName}`}</h1>
      <h2>Reference ID: {referenceId}</h2>
      <p>We have received the following message from you: </p>
      <p>{message}</p>
      <p>
        Thank you for your feedback! We will be getting back to you ASAP! If you
      </p>
      <p>
        If you have any details to add on to the above messagge, feel free to
        email us at hello@thehushretreats.com by indicating the Reference ID in
        the subject of your email!
      </p>
    </Fragment>
  );
}
