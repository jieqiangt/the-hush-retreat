import { catchApiWrapper } from "./utils/errorUtils";
import createEmailTemplate from "./utils/createEmailTemplate";
import { invokeAsyncLambda } from "./utils/awsUtils";

const allowedMethods = ["POST"];

const handler = catchApiWrapper(async (req, res) => {
  const data = req.body;

  const {
    email,
    firstName,
    lastName,
    subject,
    message,
    idToUpdate,
    referenceId,
  } = data;

  const mainSection = createEmailTemplate("contactUsConfirmation", {
    firstName,
    lastName,
    message,
    subject,
    referenceId,
  });

  const signatureSection = createEmailTemplate("signature");

  const modifiedSubject = `You query has been received! - ${referenceId} `;
  const htmlBody = `${mainSection}${signatureSection}`;

  const payload = {
    htmlBody,
    email,
    subject: modifiedSubject,
    idToUpdate,
    status: "ConfirmationSent",
    collection: "feedback",
  };

  const fnArn = process.env.LAMBDA_ARN;

  const result = await invokeAsyncLambda(fnArn, payload);
  res.status(result.$metadata.httpStatusCode).json();
}, allowedMethods);

export default handler;
