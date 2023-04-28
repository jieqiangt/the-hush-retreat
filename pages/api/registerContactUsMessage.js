import {
  connectClient,
  createReferenceId,
  insertOneToCollection,
} from "../../utils/mongoUtils";
import { catchApiWrapper } from "../../utils/errorUtils";

const allowedMethods = ["POST"];

const handler = catchApiWrapper(async (req, res) => {
  const data = req.body;
  const { email, firstName, lastName, subject, message } = data;
  const now = new Date();
  const client = await connectClient();

  const { baseId, referenceId } = createReferenceId(email);

  const result = await insertOneToCollection(
    client,
    process.env.MONGO_DBNAME,
    "feedback",
    {
      _id: baseId,
      createdOn: now,
      updatedOn: now,
      email,
      firstName,
      lastName,
      subject,
      message,
      status: "Registered",
      active: true,
      referenceId: referenceId,
    }
  );

  res.status(201).json({
    title: "Feedback Delivered!",
    clientMessage: `Your feedback has been successfully delivered! We will get to you shortly!`,
    status: 201,
    className: "notification--success",
    insertedId: baseId,
    referenceId: referenceId,
  });
  client.close();

  return result;
}, allowedMethods);

export default handler;
