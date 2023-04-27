import { Fragment } from "react";

export default function AdditionalRetreateeTemplate(props) {
  const { idx, firstName, lastName, email } = props;

  return (
    <Fragment>
      <div>
        <h2>Additional Retreatees</h2>
        <ul>
          <li>
            <h3>{`Retreatee #${idx}`}</h3>
            <ul>
              <li>{`Name: ${firstName} ${lastName}`}</li>
              <li>{`Email: ${email}`}</li>
            </ul>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}
