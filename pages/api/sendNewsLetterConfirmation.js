import { ObjectId } from "mongodb";
import { sesToUser, snsToHushRetreat } from "../../utils/awsUtils";
import { catchApiWrapper } from "../../utils/errorUtils";
import { connectClient, updateOneFromCollection } from "../../utils/mongoUtils";
import createEmailTemplate from "../../utils/createEmailTemplate";

const allowedMethods = ["POST"];

const handler = catchApiWrapper(async (req, res) => {
  const params = req.body;

  const { email, insertedId } = params;
  // await snsToHushRetreat(JSON.stringify(params), "receiveNewsletter");

  const mainSection = createEmailTemplate("newsletterConfirmation");
  const signatureSection = createEmailTemplate("signature");

  const subject = `Subscription Acknowledgement - The Hush Retreat Newsletter`;
  const htmlBody = `${mainSection}${signatureSection}`;

  // await sesToUser(email, htmlBody, subject);

  const client = await connectClient();
  const filter = { _id: ObjectId(insertedId) };
  const update = { status: "ConfirmationSent" };

  const updateResult = await updateOneFromCollection(
    client,
    process.env.MONGO_DBNAME,
    "newsletterSubscriptions",
    filter,
    update
  );

  console.log({ updateResult });

  if (!(updateResult.modifiedCount === "1")) {
    //send to logs that modification failed. Not related to user.
  }

  res.status(201).json();
}, allowedMethods);

export default handler;
