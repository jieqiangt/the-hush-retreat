import {
  connectClient,
  getOneFromCollection,
  insertOneToCollection,
} from "../../utils/mongoUtils";
import { AppError, catchApiWrapper } from "../../utils/errorUtils";
import { validateField } from "../../reducers/newRetreateeReducer";
import { ObjectId } from "mongodb";

const allowedMethods = ["POST"];

const handler = catchApiWrapper(async (req, res) => {
  const data = req.body;

  const { retreatIdStr, allRetreateeDetails, message } = data;

  const retreatId = new ObjectId(retreatIdStr);
  const now = new Date();

  const formatRetreatee = (retreateeDetailsInput) => {
    const additionalRetreatees = [];
    let mainRetreatee;

    const validateRetreatees = (retreatee) => {
      const fieldsValid =
        validateField(retreatee.firstName, "firstName") &&
        validateField(retreatee.lastName, "lastName") &&
        validateField(retreatee.email, "email") &&
        validateField(retreatee.phone, "phone");

      if (!validateField(retreatee.vaccinated, "vaccinated")) {
        throw new AppError({
          title: "User Input Error",
          clientMessage: "All retreatees must be vaccinated!",
          status: 406,
          className: "notification--error",
        });
      }

      if (!fieldsValid) {
        throw new AppError({
          title: "Invalid Input",
          clientMessage:
            "Registration failed due to invalid input in form submission.",
          status: 403,
          className: "notification--error",
        });
      }
    };

    for (const key in retreateeDetailsInput) {
      let tmpRetreatee = retreateeDetailsInput[key];
      validateRetreatees(tmpRetreatee);
      tmpRetreatee["retreateeId"] = key;

      // filtering away keys that contain string "Valid"
      const finalRetreatee = Object.keys(tmpRetreatee)
        .filter((key) => !key.includes("Valid"))
        .reduce((obj, key) => {
          obj[key] = tmpRetreatee[key];
          return obj;
        }, {});

      if (key !== "main") {
        additionalRetreatees.push(finalRetreatee);
        continue;
      }
      mainRetreatee = finalRetreatee;
    }
    return { mainRetreatee, additionalRetreatees };
  };

  const { mainRetreatee, additionalRetreatees } =
    formatRetreatee(allRetreateeDetails);

  const client = await connectClient();

  const checkExistPayload = {
    retreatId: retreatId,
    $or: [
      { "mainRetreatee.email": mainRetreatee.email },
      { "mainRetreatee.phone": mainRetreatee.phone },
      { "additionalRetreatees.email": mainRetreatee.email },
      { "additionalRetreatees.phone": mainRetreatee.phone },
    ],
  };

  const checkExist = await getOneFromCollection(
    client,
    process.env.MONGO_DBNAME,
    "bookings",
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
    "bookings",
    {
      createdOn: now,
      updatedOn: now,
      retreatId,
      mainRetreatee,
      additionalRetreatees,
      message,
      status: "bookingRegistered",
    }
  );

  res.status(201).json({
    title: "Registration Completed",
    clientMessage: `We have received your interest to join our retreat, ${mainRetreatee.firstName} ${mainRetreatee.lastName}. Do keep a lookout for a confirmation email and a personalized follow up whatsapp message for more details.`,
    status: 201,
    className: "notification--success",
    insertedId: result.insertedId,
  });
  client.close();

  return result;
}, allowedMethods);

export default handler;