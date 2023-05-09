import { catchApiWrapper } from "./utils/errorUtils";
import createEmailTemplate from "./utils/createEmailTemplate";
import { invokeAsyncLambda } from "./utils/awsUtils";

const allowedMethods = ["POST"];

const handler = catchApiWrapper(async (req, res) => {
  const params = req.body;

  const { email, idToUpdate } = params;

  const fnArn =
    "arn:aws:lambda:ap-southeast-1:615814254462:function:receive-sqs-send-sns-ses";

  const mainSection = createEmailTemplate("newsletterConfirmation");
  const signatureSection = createEmailTemplate("signature");

  const subject = `Thank you for subscribing to The Hush Retreat Mailing List!`;
  const htmlBody = `${mainSection}${signatureSection}`;

  const payload = {
    htmlBody,
    email,
    subject,
    idToUpdate,
    status: "ConfirmationSent",
    collection: "newsletterSubscriptions",
  };

  const result = await invokeAsyncLambda(fnArn, payload);

  res.status(result.$metadata.httpStatusCode).json();
}, allowedMethods);

export default handler;
