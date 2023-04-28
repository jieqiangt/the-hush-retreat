import { Fragment } from "react";

export default function NewsletterConfirmationTemplate(props) {
  const { textStyle, divStyle } = props;
  return (
    <Fragment>
      {/* <div style={divStyle}>
        <p style={textStyle}>{`Dearest`}</p>
      </div> */}
      <div style={divStyle}>
        <p style={textStyle}>Thank you for subscribing to our mailing list!</p>
      </div>
      <div style={divStyle}>
        <p style={textStyle}>
          Be the first to know when we launch new events, partnerships and
          retreats!
        </p>
        <p style={textStyle}>
          {`You will also receive exclusive The Hush Retreats community perks, so
          stay tuned ;)`}
        </p>
      </div>
      <div style={divStyle}>
        <p style={textStyle}>
          We look forward to hosting you, see you really soon!
        </p>
        <p style={textStyle}>{`Have a great day ahead :)`}</p>
      </div>
    </Fragment>
  );
}
