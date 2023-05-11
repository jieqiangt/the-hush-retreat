import { Fragment } from "react";

export default function SignatureTemplate(props) {
  const { textStyle, divStyle, iconStyle } = props;

  const signBoxStyle = {
    ...divStyle,
    width: "9em",
    "border-top": "solid 1px #204d2e",
    "border-bottom": "solid 1px #204d2e",
  };

  const iconBoxStle = {
    display: "flex",
    gap: "1.2em",
    "margin-top": "0.4em",
  };

  return (
    <Fragment>
      <div style={signBoxStyle}>
        <p style={textStyle}>Love & Light,</p>
        <p style={textStyle}>Mandi</p>
      </div>
      <div style={iconBoxStle}>
        <a href="https://thehushretreats.com/">
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
