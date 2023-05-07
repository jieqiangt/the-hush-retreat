import { InvokeCommand, LambdaClient } from "@aws-sdk/client-lambda";

const REGION = "ap-southeast-1";

export async function invokeAsyncLambda(fnArn, payload) {
  const client = new LambdaClient({ region: REGION });

  const input = {
    FunctionName: fnArn,
    InvocationType: "Event",
    Payload: JSON.stringify(payload),
  };

  const result = await client.send(new InvokeCommand(params));
  client.destroy();
  return result;
}
