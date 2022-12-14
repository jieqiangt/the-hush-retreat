import {
  connectClient,
  getOneFromCollection,
  insertOneToCollection,
} from "../../utils/mongoUtils";
import { AppError, catchApiWrapper } from "../../utils/errorUtils";
import { validateField } from "../../reducers/bookingReducer";

const allowedMethods = ["POST"];

const handler = catchApiWrapper(async (req, res) => {
  const client = await connectClient();
  const data = JSON.parse(req.body);
  const {
    retreatName,
    firstName,
    lastName,
    email,
    phone,
    numRetreatees,
    vaccinated,
    message,
  } = data;

  const fieldsValid =
    validateField([retreatName], "retreatName") &&
    validateField([firstName], "firstName") &&
    validateField([lastName], "lastName") &&
    validateField([email], "email") &&
    validateField([phone], "phone") &&
    validateField([numRetreatees], "numRetreatees");

  if (validateField([vaccinated], "vaccinated")) {
    throw new AppError({
      title: "User Input Error",
      clientMessage: "You will need to be vaccinated for the retreat.",
      status: 406,
      className: "error",
    });
  }

  if (!fieldsValid) {
    throw new AppError({
      title: "Invalid Input",
      clientMessage:
        "Registration failed due to invalid input in form submission.",
      status: 403,
      className: "error",
    });
  }

  const checkEmail = await getOneFromCollection(
    client,
    process.env.MONGO_DBNAME,
    retreatName,
    {
      email,
    },
    false
  );
  if (checkEmail) {
    throw new AppError({
      title: "User Input Error",
      clientMessage:
        "Email exists. Have you booked this retreat with us already?",
      status: 406,
      className: "error",
    });
  }

  const result = await insertOneToCollection(
    client,
    process.env.MONGO_DBNAME,
    retreatName,
    {
      retreatName,
      firstName,
      lastName,
      email,
      phone,
      numRetreatees,
      vaccinated,
      message,
    }
  );

  res.status(201).json({
    title: "Registration Completed",
    clientMessage: `We have received your interest to join our retreat, ${firstName} ${lastName}. Do keep a lookout for a confirmation email at ${email} & personalized follow up text message to confirm your booking & payment details.`,
    status: 201,
    className: "success",
  });
  client.close();
  return result;
}, allowedMethods);

export default handler;
