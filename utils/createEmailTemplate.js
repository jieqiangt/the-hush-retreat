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
    referenceId,
  } = params;

  const textColor = "#8d2517";
  const textFontSize = "1.2em";
  const headerColor = "#204d2e";
  const headerFontSize = "2em";

  const textStyle = {
    display: "block",
    "margin-block-start": "0",
    "margin-block-end": "0",
    color: textColor,
    "font-size": textFontSize,
    "line-height": "1.2",
  };

  const containerStyle = {
    display: "block",
  };

  const h2Style = { color: headerColor, "font-size": headerFontSize };
  const iconStyle = {
    height: "2em",
    width: "2em",
    "margin-left": "0.2em",
    "margin-right": "0.2em",
  };
  const ulStyle = { "list-style": "none", margin: "0", padding: "0" };
  const liStyle = { "list-style": "none", margin: "0", padding: "0" };

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
          referenceId={referenceId}
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
          lastName={lastName}
          message={message}
          referenceId={referenceId}
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
      jsxOutput = (
        <SignatureTemplate
          textStyle={textStyle}
          containerStyle={containerStyle}
          iconStyle={iconStyle}
        />
      );
      break;
  }

  return renderToString(jsxOutput);
}
