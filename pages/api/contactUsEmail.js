import { snsToHushRetreat } from "../../utils/awsUtils";
import { catchApiWrapper } from "../../utils/errorUtils";
import { connectClient, insertOneFromCollection } from "../../utils/mongoUtils";

const allowedMethods = ["POST"];

const handler = catchApiWrapper(async (req, res) => {
  const params = req.body;
  await snsToHushRetreat(JSON.stringify(params), "contactUs");
}, allowedMethods);

export default handler;
