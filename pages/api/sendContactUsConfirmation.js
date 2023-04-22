import { ObjectId } from "mongodb";
import { snsToHushRetreat } from "../../utils/awsUtils";
import { catchApiWrapper } from "../../utils/errorUtils";
import { connectClient, updateOneFromCollection } from "../../utils/mongoUtils";

const allowedMethods = ["POST"];

const handler = catchApiWrapper(async (req, res) => {
  const params = req.body;

  const { email, firstName, lastName, message, insertedId } = params;
  await snsToHushRetreat(JSON.stringify(params), "receiveFeedback");

  const mainSection = createEmailTemplate("contactUsConfirmation", {
    firstName,
    lastName,
    message,
    messageId: insertedId,
  });
  const signatureSection = createEmailTemplate("signature");

  const subject = `Subscription Acknowledgement - The Hush Retreat Newsletter`;
  const htmlBody = `${mainSection}${signatureSection}`;

  await sesToUser(email, htmlBody, subject);

  const client = await connectClient();
  const filter = { _id: ObjectId(insertedId) };
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
