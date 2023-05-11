import { Fragment } from "react";
import AdditionalRetreateeTemplate from "./emailTemplates/AdditionalRetreateeTemplate";
import { renderToString } from "react-dom/server";
import RetreatConfirmationTemplate from "./emailTemplates/RetreatConfirmationTemplate";
import SignatureTemplate from "./emailTemplates/SignatureTemplate";
import PaymentDetailsTemplate from "./emailTemplates/PaymentDetailsTemplate";
import NewsletterConfirmationTemplate from "./emailTemplates/NewsletterConfirmationTemplate";
import ContactUsConfirmationTemplate from "./emailTemplates/ContactUsConfirmationTemplate";
import PaymentConfirmationTemplate from "./emailTemplates/PaymentConfirmationTemplate";

export default function createEmailTemplate(section, params = {}) {
  const {
    mainRetreatee,
    retreat,
    additionalRetreatees,
    price,
    firstName,
    lastName,
    message,
    subject,
    numPax,
    referenceId,
  } = params;

  const textColor = "#8d2517";
  const textFontSize = "1.2em";
  const headerColor = "#204d2e";
  const headerFontSize = "1.3em";

  const headerStyle = {
    display: "block",
    "margin-block-start": "0em",
    "margin-block-end": "0em",
    color: headerColor,
    "font-size": headerFontSize,
    "line-height": "1.2",
    "text-decoration": "underline",
    "font-weight": "500",
    margin: "0em",
    "margin-bottom": "0.2em",
  };

  const textStyle = {
    display: "block",
    "margin-block-start": "0em",
    "margin-block-end": "0em",
    color: textColor,
    "font-size": textFontSize,
    "line-height": "1.2",
    margin: "0em",
    padding: "0em",
  };

  const divStyle = {
    display: "block",
    "margin-block-start": "0",
    "margin-block-end": "0",
    padding: "0.4em 0em",
    margin: "0.8em 0em",
  };

  const iconStyle = {
    height: "2em",
    width: "2em",
  };

  const ulStyle = {
    "list-style": "none",
    margin: "0",
    padding: "0",
  };
  const liStyle = {
    ...textStyle,
    "list-style": "none",
    margin: "0",
    padding: "0",
  };

  const additionalRetreateesReturn = additionalRetreatees
    ? additionalRetreatees.map((item, idx) => (
        <AdditionalRetreateeTemplate
          key={item.email}
          idx={idx + 1}
          firstName={item.firstName}
          lastName={item.lastName}
          email={item.email}
          bikiniStyle={item.bikiniStyle}
          size={item.size}
          accomodation={item.accomodation}
          dietary={item.dietary}
          textStyle={textStyle}
          divStyle={divStyle}
          ulStyle={ulStyle}
          liStyle={liStyle}
          headerStyle={headerStyle}
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
          textStyle={textStyle}
          divStyle={divStyle}
          ulStyle={ulStyle}
          liStyle={liStyle}
          headerStyle={headerStyle}
        />
      );
      break;
    case "newsletterConfirmation":
      jsxOutput = (
        <NewsletterConfirmationTemplate
          textStyle={textStyle}
          divStyle={divStyle}
        />
      );
      break;
    case "contactUsConfirmation":
      jsxOutput = (
        <ContactUsConfirmationTemplate
          firstName={firstName}
          lastName={lastName}
          message={message}
          subject={subject}
          textStyle={textStyle}
          divStyle={divStyle}
          ulStyle={ulStyle}
          liStyle={liStyle}
        />
      );
      break;
    case "paymentConfirmation":
      jsxOutput = (
        <PaymentConfirmationTemplate
          firstName={firstName}
          lastName={lastName}
          retreat={retreat}
          textStyle={textStyle}
          divStyle={divStyle}
          ulStyle={ulStyle}
          liStyle={liStyle}
        />
      );
      break;
    case "additionalRetreatees":
      jsxOutput = <Fragment>{additionalRetreateesReturn}</Fragment>;
      break;
    case "paymentDetails":
      jsxOutput = (
        <PaymentDetailsTemplate
          price={price}
          numPax={numPax}
          referenceId={referenceId}
          textStyle={textStyle}
          divStyle={divStyle}
          ulStyle={ulStyle}
        />
      );
      break;
    case "signature":
      jsxOutput = (
        <SignatureTemplate
          textStyle={textStyle}
          divStyle={divStyle}
          iconStyle={iconStyle}
        />
      );
      break;
  }

  return renderToString(jsxOutput);
}
