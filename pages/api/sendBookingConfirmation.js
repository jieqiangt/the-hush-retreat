import { sesToUser, snsToHushRetreat } from "../../utils/awsUtils";
import { catchApiWrapper } from "../../utils/errorUtils";
import { connectClient, updateOneFromCollection } from "../../utils/mongoUtils";
import { ObjectId } from "mongodb";

const allowedMethods = ["POST"];

const handler = catchApiWrapper(async (req, res) => {
  const params = req.body;
  await snsToHushRetreat(JSON.stringify(params));
  await sesToUser(params);

  const client = await connectClient();
  const filter = { _id: ObjectId(req.body.insertedId) };
  const update = { status: "bookingConfirmationSent" };

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

  res.status(201).json({});
}, allowedMethods);

export default handler;
