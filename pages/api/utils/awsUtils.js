import { InvokeCommand, LambdaClient } from "@aws-sdk/client-lambda";

const REGION = "ap-southeast-1";

export async function invokeAsyncLambda(fnArn, payload) {
  try {
    const client = new LambdaClient({ region: REGION });
    const input = {
      FunctionName: fnArn,
      InvocationType: "Event",
      Payload: JSON.stringify(payload),
    };

    const result = await client.send(new InvokeCommand(input));
    client.destroy();
    return result;
  } catch (err) {
    const title = "AWS Email Service Error";
    Logger.error(`::::::::::::::: ${getCurrentDateTimeStr()} :::::::::::: `);
    Logger.error(title);
    Logger.error(err);
    throw new AppError({
      title,
      clientMessage: `Services is currently unavailable. Please try again later. Apologies on the inconvenience caused.`,
      status: 503,
      className: "notification--error",
    });
  }
}
