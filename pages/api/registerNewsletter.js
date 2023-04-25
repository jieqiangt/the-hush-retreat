import {
  connectClient,
  getOneFromCollection,
  insertOneToCollection,
} from "../../utils/mongoUtils";
import { AppError, catchApiWrapper } from "../../utils/errorUtils";

const allowedMethods = ["POST"];

const handler = catchApiWrapper(async (req, res) => {
  const data = req.body;
  const { email } = data;
  const now = new Date();
  const client = await connectClient();

  const checkExistPayload = {
    email: email,
  };
  const checkExist = await getOneFromCollection(
    client,
    process.env.MONGO_DBNAME,
    "newsletterSubscriptions",
    checkExistPayload,
    false
  );

  if (checkExist) {
    throw new AppError({
      title: "User Input Error",
      clientMessage:
        "Email or mobile number exists in our database. Have you booked this retreat with us already?",
      status: 406,
      className: "notification--error",
    });
  }

  const result = await insertOneToCollection(
    client,
    process.env.MONGO_DBNAME,
    "newsletterSubscriptions",
    {
      createdOn: now,
      updatedOn: now,
      email,
      isActive: true,
      status: "Registered",
    }
  );

  res.status(201).json({
    title: "Successfully Subscribed!",
    clientMessage: `You have successfully subscribed to our newsletter. Do look out for our upcoming wellness retreats!`,
    status: 201,
    className: "notification--success",
    insertedId: result.insertedId,
  });
  client.close();

  return result;
}, allowedMethods);

export default handler;