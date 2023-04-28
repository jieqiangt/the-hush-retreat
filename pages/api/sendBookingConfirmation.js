import { sesToUser, snsToHushRetreat } from "../../utils/awsUtils";
import createEmailTemplate from "../../utils/createEmailTemplate";
import { catchApiWrapper } from "../../utils/errorUtils";
import { connectClient, updateOneFromCollection } from "../../utils/mongoUtils";

const allowedMethods = ["POST"];

const handler = catchApiWrapper(async (req, res) => {
  const data = req.body;
  const {
    retreat,
    referenceId,
    insertedId,
    mainRetreatee,
    additionalRetreatees,
  } = data;

  await snsToHushRetreat(JSON.stringify(data), "receiveBooking");

  const mainSection = createEmailTemplate("retreatConfirmation", {
    mainRetreatee,
    retreat,
  });
  const additionalRetreateesSection = createEmailTemplate(
    "additionalRetreatees",
    { additionalRetreatees }
  );
  const paymentDetails = createEmailTemplate("paymentDetails", {
    price: retreat.price,
  });
  const signatureSection = createEmailTemplate("signature");

  const subject = `We have received your booking! - ${referenceId}`;
  const htmlBody = `${mainSection}${additionalRetreateesSection}${paymentDetails}${signatureSection}`;

  await sesToUser(mainRetreatee.email, htmlBody, subject);

  const client = await connectClient();
  const filter = { _id: insertedId };
  const update = { status: "ConfirmationSent" };

  const updateResult = await updateOneFromCollection(
    client,
    process.env.MONGO_DBNAME,
    "bookings",
    filter,
    update
  );

  if (!(updateResult.modifiedCount === "1")) {
    //send to logs that modification failed. Not related to user.
  }

  res.status(201).json();
}, allowedMethods);

export default handler;
