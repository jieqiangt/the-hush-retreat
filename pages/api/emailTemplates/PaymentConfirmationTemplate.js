import { Fragment } from "react";

export default function PaymentConfirmationTemplate(props) {
  const { firstName, lastName, retreat, textStyle, divStyle } = props;

  return (
    <Fragment>
      <div style={divStyle}>
        <p style={textStyle}>{`Dearest ${firstName} ${lastName}`}</p>
      </div>
      <div style={divStyle}>
        <p style={textStyle}>
          {`Thank you for your interest in ${retreat.name} on ${retreat.date}.`}
        </p>
      </div>
      <div style={divStyle}>
        <p style={textStyle}>
          {`Your payment of SGD ${retreat.price} is well-received and our hosts will reach
          out to you via Whatsapp or email with more details.`}
        </p>
      </div>
      <div style={divStyle}>
        <p
          style={textStyle}
        >{`We look forward to hosting you, see you really soon!`}</p>
        <p style={textStyle}>{`Have a great day ahead :)`}</p>
      </div>
    </Fragment>
  );
}
