import { Fragment } from "react";

export default function PaymentDetailsTemplate(props) {
  const { price, numPax, referenceId, textStyle, divStyle, ulStyle, liStyle } =
    props;

  const imgStyle = {
    "padding-left": "1em",
    height: "10em",
    width: "10em",
  };

  return (
    <Fragment>
      <div style={divStyle}>
        <p style={textStyle}>
          {`To secure your spot(s), please make a payment of SGD ${
            price * numPax
          } (SGD ${price} per pax) to The Hush Retreats Pte Ltd via:`}
        </p>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <p style={textStyle}> - QR code with GPay or PayAnyone: </p>
            <img
              style={imgStyle}
              src="https://hush-retreat.s3.ap-southeast-1.amazonaws.com/paynowqr.png"
              alt="QR code for payment"
            />
          </li>
          <li style={liStyle}>
            <p style={textStyle}> - Paynow UEN: 202144732M</p>
          </li>
        </ul>
        <p style={textStyle}>
          {`** Please include your reference ID: ${referenceId} during payment for our easy verification.`}
        </p>
        <p style={textStyle}>
          Once complete, reply to this email with a screenshot of your
          successful transaction AND the signed Participant Form.
        </p>
      </div>
      <div style={divStyle}>
        <p style={textStyle}>
          Please do not hesitate to contact us should you have any questions or
          concerns.
        </p>
        <p style={textStyle}>
          You can reply to this email or reach us on Whatsapp +65 90036131.
        </p>
      </div>
      <div style={divStyle}>
        <p
          style={textStyle}
        >{`We look forward to hosting you, see you really soon! `}</p>
        <p style={textStyle}>{`Have a great day ahead :)`}</p>
      </div>
    </Fragment>
  );
}
