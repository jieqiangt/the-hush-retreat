import fs from "fs";
import { catchApiWrapper } from "../pages/api/utils/errorUtils";

const allowedMethods = ["POST"];

const handler = catchApiWrapper(async (req, res) => {
  const params = req.body;

  const {
    retreatConfirmationhtmlBody,
    paymentConfirmationhtmlBody,
    contactUsConfirmationhtmlBody,
    newsletterConfirmationhtmlBody,
  } = params;

  console.log("generating html files...");

  fs.writeFileSync(
    "./emailTest/retreatConfirmationEmail.html",
    retreatConfirmationhtmlBody
  );
  fs.writeFileSync(
    "./emailTest/paymentConfirmationEmail.html",
    paymentConfirmationhtmlBody
  );
  fs.writeFileSync(
    "./emailTest/contactUsConfirmationEmail.html",
    contactUsConfirmationhtmlBody
  );
  fs.writeFileSync(
    "./emailTest/newsletterConfirmationEmail.html",
    newsletterConfirmationhtmlBody
  );

  res.status(201).json();
  return;
}, allowedMethods);

export default handler;
