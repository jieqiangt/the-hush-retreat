import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";
import {
  SESClient,
  CreateTemplateCommand,
  SendTemplatedEmailCommand,
} from "@aws-sdk/client-ses";

const REGION = "ap-southeast-1";

export async function snsToHushRetreat(details, subject = "booking") {
  const client = new SNSClient({ region: REGION });

  let message = `Retreat Booking Notification \n ${details}`;

  if (subject === "contactUs") {
    message = `Contact Us: \n ${details}`;
  }
  
  const params = {
    Message: message,
    TopicArn: "arn:aws:sns:ap-southeast-1:615814254462:hush-bookings",
  };
  const data = await client.send(new PublishCommand(params));
  client.destroy();
  return data;
}

// create template with params

export async function createEmailTemplate() {
  const client = new SESClient({ region: REGION });
  const templateObj = {
    Template: {
      TemplateName: "hushRetreat",
      HtmlPart: `
      <h1>Hi {{bookingDetails.firstName}} {{bookingDetails.lastName}}</h1>

      <p>Thank you for booking a retreat with us at The Hush Retreat.</p>
      <p>Your booking details are as follows:</p>
      
      <h2>Guest Contact Details</h2>
      <ul>
        <li>
          Guest Name: {{bookingDetails.firstName}} {{bookingDetails.lastName}}
        </li>
        <li>Contact No: {{bookingDetails.phone}}</li>
        <li>Email: {{bookingDetails.email}}</li>
      </ul>
      <h2>Retreat Details</h2>
      <ul>
        <li>Retreat Name: {{bookingDetails.retreatName}}</li>
        <li>Date of Retreat: {{bookingDetails.date}}</li>
        <li>Location: {{bookingDetails.location}}</li>
        <li>No. of Retreatees: {{bookingDetails.numRetreatees}}</li>
      </ul>
      
      <p>Click <a>here</a> to input your retreatees details to confirm your booking.</p>
      
      <h2>Payment Details</h2>
      <p>Instructions to pay</p>
      
      <p>Best Regards</p>
      <p>Mandi</p>
      <p>The Hush Retreat</p>
      <icon>Hush Retreat Icon Which is a Link to website</icon>
      <icon>Social media icons</icon>
          `,
      SubjectPart:
        "The Hush Retreat - {{bookingDetails.retreatName}} Booking Acknowledgement",
    },
  };
  const result = client.send(new CreateTemplateCommand(templateObj));
  client.destroy();
  return result;
}

export async function sesToUser(bookingDetails) {
  const client = new SESClient({ region: REGION });
  const verifiedEmail = "hello@thehushretreats.com";
  const templateName = "hushRetreat";

  const result = await client.send(
    new SendTemplatedEmailCommand({
      Destination: { ToAddresses: [bookingDetails.email] },
      TemplateData: JSON.stringify({ bookingDetails }),
      Source: verifiedEmail,
      Template: templateName,
    })
  );
  client.destroy();

  return result;
}
