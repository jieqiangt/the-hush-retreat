import { Fragment } from "react";

export default function RetreatConfirmationTemplate(props) {
  const {
    mainRetreatee,
    retreat,
    textStyle,
    divStyle,
    ulStyle,
    liStyle,
    headerStyle,
  } = props;

  return (
    <Fragment>
      <div style={divStyle}>
        <p style={textStyle}>
          {`Dearest ${mainRetreatee.firstName} ${mainRetreatee.lastName}`},
        </p>
      </div>
      <div style={divStyle}>
        <p style={textStyle}>This is Mandi from The Hush Retreats! </p>
        <p
          style={textStyle}
        >{`Thank you for expressing interest to spend a lovely time with us at ${retreat.name} on ${retreat.date}. This will be ${retreat.emailDesc}.`}</p>
      </div>
      <div style={divStyle}>
        <h3 style={headerStyle}>Main Retreatee</h3>
        <ul style={ulStyle}>
          <li
            style={liStyle}
          >{`Name: ${mainRetreatee.firstName} ${mainRetreatee.lastName}`}</li>
          <li style={liStyle}>{`Email: ${mainRetreatee.email}`}</li>
          <li style={liStyle}>{`Phone: ${mainRetreatee.phone}`}</li>
          {mainRetreatee.size ? (
            <li
              style={liStyle}
            >{`Size: ${mainRetreatee.size.toUpperCase()}`}</li>
          ) : (
            ""
          )}
          {mainRetreatee.bikiniStyle ? (
            <li
              style={liStyle}
            >{`Bikini Style: ${mainRetreatee.bikiniStyle.toUpperCase()}`}</li>
          ) : (
            ""
          )}
        </ul>
      </div>
      {retreat.emailOtherInfo ? (
        <div style={divStyle}>
          <p style={textStyle}>Here are your booking details:</p>
          <p style={textStyle}>{retreat.emailOtherInfo}</p>
        </div>
      ) : (
        ""
      )}
      <div style={divStyle}>
        <p style={textStyle}>
          You may find attached a Participant Information & Indemnity Form that
          we will require you to fill up.
        </p>
        <p style={textStyle}>
          {` Please take some time to look through the details, so we can get to know you better. :)`}
        </p>
      </div>
    </Fragment>
  );
}
