import { invokeAsyncLambda } from "./utils/awsUtils";
import createEmailTemplate from "./utils/createEmailTemplate";
import { catchApiWrapper } from "./utils/errorUtils";

const allowedMethods = ["POST"];

const handler = catchApiWrapper(async (req, res) => {
  const data = req.body;
  const {
    retreat,
    retreatStrDate,
    referenceId,
    idToUpdate,
    mainRetreatee,
    additionalRetreatees,
  } = data;

  const numPax = additionalRetreatees.length + 1;

  const totalDiscount = Math.floor(numPax / 2) * 100;
  const totalPrice = numPax * retreat.price - totalDiscount;

  const mainSection = createEmailTemplate("retreatConfirmation", {
    mainRetreatee,
    retreat,
    retreatStrDate,
  });
  const additionalRetreateesSection = createEmailTemplate(
    "additionalRetreatees",
    { additionalRetreatees }
  );
  const paymentDetails = createEmailTemplate("paymentDetails", {
    price: retreat.price,
    numPax,
    referenceId,
  });
  const signatureSection = createEmailTemplate("signature");

  const subject = `We have received your booking! - ${referenceId}`;
  const htmlBody = `${mainSection}${additionalRetreateesSection}${paymentDetails}${signatureSection}`;

  const fnArn = process.env.LAMBDA_ARN;
  const payload = {
    htmlBody,
    email: mainRetreatee.email,
    subject,
    idToUpdate,
    status: "ConfirmationSent",
    collection: "bookings",
  };

  const result = await invokeAsyncLambda(fnArn, payload);
  res.status(result.$metadata.httpStatusCode).json();
}, allowedMethods);

export default handler;
