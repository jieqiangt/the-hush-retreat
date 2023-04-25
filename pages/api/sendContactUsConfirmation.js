import { sesToUser, snsToHushRetreat } from "../../utils/awsUtils";
import { catchApiWrapper } from "../../utils/errorUtils";
import { connectClient, updateOneFromCollection } from "../../utils/mongoUtils";
import createEmailTemplate from "../../utils/createEmailTemplate";

const allowedMethods = ["POST"];

const handler = catchApiWrapper(async (req, res) => {
  const params = req.body;

  const {
    email,
    firstName,
    lastName,
    subject,
    message,
    insertedId,
    referenceId,
  } = params;
  await snsToHushRetreat(JSON.stringify(params), "receiveFeedback");

  const mainSection = createEmailTemplate("contactUsConfirmation", {
    firstName,
    lastName,
    message,
    referenceId,
  });
  const signatureSection = createEmailTemplate("signature");

  const modifiedSubject = `The Hush Retreat Feedback Acknowledgement - ${subject}`;
  const htmlBody = `${mainSection}${signatureSection}`;

  await sesToUser(email, htmlBody, modifiedSubject);

  const client = await connectClient();
  const filter = { _id: insertedId };
  const update = { status: "ConfirmationSent" };

  const updateResult = await updateOneFromCollection(
    client,
    process.env.MONGO_DBNAME,
    "feedback",
    filter,
    update
  );

  if (!(updateResult.modifiedCount === "1")) {
    //send to logs that modification failed. Not related to user.
  }

  res.status(201).json();
}, allowedMethods);

export default handler;
