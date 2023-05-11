import { Fragment } from "react";

export default function AdditionalRetreateeTemplate(props) {
  const {
    idx,
    firstName,
    lastName,
    email,
    size,
    bikiniStyle,
    dietary,
    accomodation,
    divStyle,
    headerStyle,
    ulStyle,
    liStyle,
  } = props;

  const liOuterStyle = {
    "list-style": "none",
    padding: "0em",
    margin: "0.3em 0em",
  };

  return (
    <Fragment>
      <div style={divStyle}>
        <h3 style={headerStyle}>Additional Retreatees</h3>
        <ul style={ulStyle}>
          <li style={liOuterStyle}>
            <h3 style={headerStyle}>{`Retreatee #${idx}`}</h3>
            <ul style={ulStyle}>
              <li style={liStyle}>{`Name: ${firstName} ${lastName}`}</li>
              <li style={liStyle}>{`Email: ${email}`}</li>
              {size ? (
                <li style={liStyle}>{`Size: ${size.toUpperCase()}`}</li>
              ) : (
                ""
              )}
              {bikiniStyle ? (
                <li
                  style={liStyle}
                >{`Bikini Style: ${bikiniStyle.toUpperCase()}`}</li>
              ) : (
                ""
              )}
              {accomodation ? (
                <li
                  style={liStyle}
                >{`Accomodation Option: ${accomodation.toUpperCase()}`}</li>
              ) : (
                ""
              )}
              {dietary ? (
                <li style={liStyle}>{`Dietary Restriction: ${dietary
                  .charAt(0)
                  .toUpperCase()}${dietary.slice(1)}`}</li>
              ) : (
                ""
              )}
            </ul>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}
