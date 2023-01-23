import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";
import {
  SESClient,
  CreateTemplateCommand,
  SendTemplatedEmailCommand,
} from "@aws-sdk/client-ses";

const REGION = "ap-southeast-1";

export async function snsToHushRetreat(details) {
  const smsClient = new SNSClient({ region: REGION });
  const message = `Retreat Booking Notification \n ${details}`;
  const params = {
    Message: message,
    TopicArn: "arn:aws:sns:ap-southeast-1:615814254462:hush-bookings",
  };
  const data = await smsClient.send(new PublishCommand(params));
  smsClient.destroy();
  return data;
}

// create template with params

export async function createEmailTemplate() {
  const templateObj = {
    Template: {
      TemplateName: "hushRetreat",
      HtmlPart: `
      <h1>Hi {{bookingDetails.firstName}} {{bookingDetails.lastName}}.</h1>

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
      
      <p>Click <a>here</a> to acknowledge your booking details are accurate.</p>
      
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
  new CreateTemplateCommand();
}

const run = async () => {
  const createTemplateCommand = createCreateTemplateCommand();

  try {
    return await sesClient.send(createTemplateCommand);
  } catch (err) {
    console.log("Failed to create template.", err);
    return err;
  }
};

export async function sesToUser(bookingDetails) {
  const sesClient = new SESClient({ region: REGION });
}

// Sending templated email

/**
 * Replace this with the name of an existing template.
 */
const TEMPLATE_NAME = getUniqueName("ReminderTemplate");

/**
 * Replace these with existing verified emails.
 */
const VERIFIED_EMAIL = postfix(getUniqueName("Bilbo"), "@example.com");

const USER = { firstName: "Bilbo", emailAddress: VERIFIED_EMAIL };

/**
 *
 * @param { { emailAddress: string, firstName: string } } user
 * @param { string } templateName - The name of an existing template in Amazon SES.
 * @returns { SendTemplatedEmailCommand }
 */
const createReminderEmailCommand = (user, templateName) => {
  return new SendTemplatedEmailCommand({
    /**
     * Here's an example of how a template would be replaced with user data:
     * Template: <h1>Hello {{contact.firstName}},</h1><p>Don't forget about the party gifts!</p>
     * Destination: <h1>Hello Bilbo,</h1><p>Don't forget about the party gifts!</p>
     */
    Destination: { ToAddresses: [user.emailAddress] },
    TemplateData: JSON.stringify({ contact: { firstName: user.firstName } }),
    Source: VERIFIED_EMAIL,
    Template: templateName,
  });
};

const run = async () => {
  const sendReminderEmailCommand = createReminderEmailCommand(
    USER,
    TEMPLATE_NAME
  );
  try {
    return await sesClient.send(sendReminderEmailCommand);
  } catch (err) {
    console.log("Failed to send template email", err);
    return err;
  }
};
