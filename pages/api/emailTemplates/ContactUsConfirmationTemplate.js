import { Fragment } from "react";

export default function ContactUsConfirmationTemplate(props) {
  const { firstName, lastName, message, textStyle, divStyle, ulStyle } = props;

  const liStyle = { "list-style": "none", margin: "0", padding: "0" };

  return (
    <Fragment>
      <div style={divStyle}>
        <p style={textStyle}>{`Dearest ${firstName} ${lastName}`}</p>
      </div>
      <div style={divStyle}>
        <p style={textStyle}>
          We have received your query and would like to thank you for reaching
          out to us!
        </p>
      </div>
      <div style={divStyle}>
        <p style={textStyle}>Your Query:</p>
        <p style={textStyle}>{message}</p>
      </div>
      <div style={divStyle}>
        <p style={textStyle}>
          If your inquiry is urgent, please do not hesitate to reach us via
          Whatsapp +65 90036131.
        </p>
        <p style={textStyle}>
          Otherwise, we will be in touch with you shortly!
        </p>
      </div>
      <div style={divStyle}>
        <p style={textStyle}>
          In the meantime, you can check out our following resources:
        </p>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <a style={textStyle} href="#">
              - Frequently Asked Questions
            </a>
          </li>
          <li style={liStyle}>
            <a style={textStyle} href="#">
              - Upcoming Events
            </a>
          </li>
          <li style={liStyle}>
            <a style={textStyle} href="#">
              - Recent and Past Events
            </a>
          </li>
        </ul>
      </div>
      <div style={divStyle}>
        <p style={textStyle}>{`Have a great day ahead :)`}</p>
      </div>
    </Fragment>
  );
}
