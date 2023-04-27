import { Fragment } from "react";

export default function SignatureTemplate(props) {
  const { textStyle, containerStyle, iconStyle } = props;

  const signBoxStyle = {
    ...containerStyle,
    padding: "0.4em 0em",
    margin: "0.8em 0em",
    width: "10em",
    "border-top": "solid 1px #d6bf8a",
    "border-bottom": "solid 1px #d6bf8a",
  };

  const iconBoxStle = {
    display: "flex",
    gap: "0.2em",
    "margin-top": "0.4em",
  };
  return (
    <Fragment>
      <div style={signBoxStyle}>
        <p style={textStyle}>The Hush Retreat</p>
        <p style={textStyle}>Mandi</p>
      </div>
      <div style={iconBoxStle}>
        <a href="#">
          <img
            style={iconStyle}
            src="https://hush-retreat.s3.ap-southeast-1.amazonaws.com/main-logo-green.png"
            alt="The Hush Retreat Logo"
          />
        </a>
        <a href="https://www.instagram.com/thehushretreats/?igshid=YmMyMTA2M2Y%3D">
          <img
            style={iconStyle}
            src="https://hush-retreat.s3.ap-southeast-1.amazonaws.com/ig.png"
            alt="Instagram Logo"
          />
        </a>
        <a href="https://www.facebook.com/thehushretreats/">
          <img
            style={iconStyle}
            src="https://hush-retreat.s3.ap-southeast-1.amazonaws.com/fb.png"
            alt="Facebook Logo"
          />
        </a>
      </div>
    </Fragment>
  );
}
