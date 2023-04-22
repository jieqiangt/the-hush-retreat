import { Fragment } from "react";

export default function PaymentDetailsTemplate(props) {
  const { price, bookingId } = props;
  return (
    <Fragment>
      <div>
        <h2>Payment Details</h2>
        <p>Amount to pay: ${price}</p>
        <p>
          Scan the QR code below to make payment via GPay/PayAnyone to secure
          your booking!
        </p>
        <img
          src="https://hush-retreat.s3.ap-southeast-1.amazonaws.com/paynowqr.png"
          alt="QR code for payment"
        />
        <p>
          {`It is recommended that your payment is made with the same phone number & name used for your booking.`}
        </p>
        <p>
          {`** Please indicate your booking reference ${bookingId} in the reference for us to identify your payment automatically.`}
        </p>
      </div>
    </Fragment>
  );
}
