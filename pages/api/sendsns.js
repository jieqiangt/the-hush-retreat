import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";
import { catchApiWrapper } from "../../utils/errorUtils";

const allowedMethods = ["POST"];

const handler = catchApiWrapper(async (req, res) => {
  const client = new SNSClient({ region: "ap-southeast-1" });
  const message = `Retreat Booking Notification \n ${JSON.stringify(req.body)}`;

  const params = {
    Message: message,
    TopicArn: "arn:aws:sns:ap-southeast-1:615814254462:hush-bookings",
  };

  const data = await client.send(new PublishCommand(params));
  client.destroy();

  res.status(201).json({});
  return data;
}, allowedMethods);

export default handler;
