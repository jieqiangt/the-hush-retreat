import { Fragment } from "react";

export default function AdditionalRetreateeTemplate(props) {
  const {
    idx,
    firstName,
    lastName,
    email,
    size,
    bikiniStyle,
    divStyle,
    headerStyle,
    ulStyle,
    liStyle,
  } = props;

  const liOuterStyle = {
    "list-style": "none",
    ...divStyle,
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
              {size ? <li style={liStyle}>{`Size: ${size}`}</li> : ""}
              {bikiniStyle ? (
                <li style={liStyle}>{`Bikini Style: ${bikiniStyle}`}</li>
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
