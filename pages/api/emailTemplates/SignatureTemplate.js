import { Fragment } from "react";

export default function SignatureTemplate() {
  return (
    <Fragment>
      <p>Best Regards</p>
      <p>Mandi</p>
      <a href="#">
        <img
          src="https://hush-retreat.s3.ap-southeast-1.amazonaws.com/main-logo-green.png"
          alt="The Hush Retreat Logo"
        />
      </a>
      <a href="https://www.instagram.com/thehushretreats/?igshid=YmMyMTA2M2Y%3D">
        <img
          src="https://hush-retreat.s3.ap-southeast-1.amazonaws.com/ig.png"
          alt="The Hush Retreat Logo"
        />
      </a>
      <a href="https://www.facebook.com/thehushretreats/">
        <img
          src="https://hush-retreat.s3.ap-southeast-1.amazonaws.com/fb.png"
          alt="The Hush Retreat Logo"
        />
      </a>
    </Fragment>
  );
}
