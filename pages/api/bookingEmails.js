import { snsToHushRetreat } from "../../utils/awsUtils";
import { catchApiWrapper } from "../../utils/errorUtils";
import { connectClient, updateOneFromCollection } from "../../utils/mongoUtils";

const allowedMethods = ["POST"];

const handler = catchApiWrapper(async (req, res) => {
  const {
    retreatName,
    firstName,
    lastName,
    email,
    phone,
    numRetreatees,
    vaccinated,
    message,
    insertedId,
  } = req.body;

  const snsResult = snsToHushRetreat(JSON.stringify(bookingDetails));
  const confirmWithUser = async () => {};

  const client = await connectClient();

  const filter = { _id: insertedId };
  const update = { bookingStatus: "emailSent" };
  const updateResult = await updateOneFromCollection(
    client,
    process.env.MONGO_DBNAME,
    "bookings",
    filter,
    update
  );

  res.status(201).json({});
  return data;
}, allowedMethods);

export default handler;
