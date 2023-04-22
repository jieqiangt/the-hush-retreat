import { Fragment } from "react";
import AdditionalRetreateeTemplate from "../pages/api/emailTemplates/AdditionalRetreateeTemplate";
import { renderToString } from "react-dom/server";
import RetreatConfirmationTemplate from "../pages/api/emailTemplates/RetreatConfirmationTemplate";
import SignatureTemplate from "../pages/api/emailTemplates/SignatureTemplate";
import PaymentDetailsTemplate from "../pages/api/emailTemplates/PaymentDetailsTemplate";
import NewsletterConfirmationTemplate from "../pages/api/emailTemplates/NewsletterConfirmationTemplate";
import ContactUsConfirmationTemplate from "../pages/api/emailTemplates/ContactUsConfirmationTemplate";

export default function createEmailTemplate(section, params = {}) {
  const {
    mainRetreatee,
    retreat,
    additionalRetreatees,
    bookingId,
    price,
    firstName,
    lastName,
    message,
    messageId,
  } = params;

  const additionalRetreateesReturn = additionalRetreatees
    ? additionalRetreatees.map((item, idx) => (
        <AdditionalRetreateeTemplate
          key={item.email}
          idx={idx + 1}
          firstName={item.firstName}
          lastName={item.lastName}
          email={item.email}
        />
      ))
    : "";

  let jsxOutput;

  switch (section) {
    case "retreatConfirmation":
      jsxOutput = (
        <RetreatConfirmationTemplate
          mainRetreatee={mainRetreatee}
          retreat={retreat}
          bookingId={bookingId}
        />
      );
      break;
    case "newsletterConfirmation":
      jsxOutput = <NewsletterConfirmationTemplate />;
      break;
    case "contactUsConfirmation":
      jsxOutput = (
        <ContactUsConfirmationTemplate
          firstName={firstName}
          lastname={lastName}
          message={message}
          messageId={messageId}
        />
      );
      break;
    case "additionalRetreatees":
      jsxOutput = <Fragment>{additionalRetreateesReturn}</Fragment>;
      break;
    case "paymentDetails":
      jsxOutput = (
        <PaymentDetailsTemplate price={price} bookingId={bookingId} />
      );
      break;
    case "signature":
      jsxOutput = <SignatureTemplate />;
      break;
  }

  return renderToString(jsxOutput);
}
