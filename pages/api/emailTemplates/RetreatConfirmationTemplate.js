import { Fragment } from "react";

export default function RetreatConfirmationTemplate(props) {
  const { mainRetreatee, retreat, referenceId } = props;

  return (
    <Fragment>
      <h1>{`Hi ${mainRetreatee.firstName} ${mainRetreatee.lastName}`}</h1>
      <p>Thank you for booking a retreat with us at The Hush Retreat.</p>
      <p>Your booking details are as follows:</p>

      <h2>Booking Details</h2>
      <ul>
        <li>{`Main Retreatee: ${mainRetreatee.firstName} ${mainRetreatee.lastName}`}</li>
        <li>{`Contact No: ${mainRetreatee.phone}`}</li>
        <li>{`Email: ${mainRetreatee.email}`}</li>
        <li>{`Booking Reference: ${referenceId}`}</li>
      </ul>
      <h2>Retreat Details</h2>
      <ul>
        <li>{`Name: ${retreat.name}`}</li>
        <li>{`Date: ${retreat.date}`}</li>
        <li>{`Time: ${retreat.time}`}</li>
        <li>{`Location: ${retreat.location}`}</li>
      </ul>
      {retreat.otherInfo ? <div>{retreat.otherInfo}</div> : ""}
    </Fragment>
  );
}
