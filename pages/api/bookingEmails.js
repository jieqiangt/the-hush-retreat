import {
  createEmailTemplate,
  sesToUser,
  snsToHushRetreat,
} from "../../utils/awsUtils";
import { catchApiWrapper } from "../../utils/errorUtils";
import { connectClient, updateOneFromCollection } from "../../utils/mongoUtils";

const allowedMethods = ["POST"];

const handler = catchApiWrapper(async (req, res) => {
  const params = req.body;
  const snsResult = snsToHushRetreat(JSON.stringify(params));
  const sesResult = sesToUser(params);

  // const client = await connectClient();
  // const filter = { _id: insertedId };
  // const update = { bookingStatus: "emailSent" };

  // const updateResult = await updateOneFromCollection(
  //   client,
  //   process.env.MONGO_DBNAME,
  //   "bookings",
  //   filter,
  //   update
  // );

  res.status(201).json({});
  return "okay";
}, allowedMethods);

export default handler;
