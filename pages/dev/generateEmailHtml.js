import { Fragment } from "react";
import LinkButton from "../../components/ui/LinkButton";
import { callApi } from "../../utils/apiUtils";
import createEmailTemplate from "../../utils/createEmailTemplate";

export default function generateEmailHtmlPage() {
  const generateHtml = async () => {
    const referenceId = "referenceId";

    const mainRetreatee = {
      firstName: "Jie Qiang",
      lastName: "Tan",
      email: "jieqiangt@gmail.com",
      phone: "91129900",
    };
    const retreat = {
      name: "SWEAT x Ollie",
      date: "29th Apr 2023",
      time: "8.30am to 10am",
      location: "Sentosa",
      price: "100",
      otherInfo: "Just some other infomation",
    };

    const additionalRetreatees = [
      {
        firstName: "Jie Qiang",
        lastName: "Tan",
        email: "jieqiangt@gmail.com",
      },
    ];

    const mainSection = createEmailTemplate("retreatConfirmation", {
      mainRetreatee,
      retreat,
      referenceId,
    });
    const additionalRetreateesSection = createEmailTemplate(
      "additionalRetreatees",
      { additionalRetreatees }
    );
    const paymentDetails = createEmailTemplate("paymentDetails", {
      price: retreat.price,
      referenceId,
    });
    const signatureSection = createEmailTemplate("signature");

    const newsletterConfirmation = createEmailTemplate(
      "newsletterConfirmation"
    );

    const contactUsConfirmation = createEmailTemplate("contactUsConfirmation", {
      firstName: mainRetreatee.firstName,
      lastName: mainRetreatee.lastName,
      message: "This is a test message",
    });

    const paymentConfirmation = createEmailTemplate("paymentConfirmation", {
      firstName: mainRetreatee.firstName,
      lastName: mainRetreatee.lastName,
      retreat: retreat,
    });

    const subject = `Booking Acknowledgement - ${retreat.name}`;
    const retreatConfirmationhtmlBody = `${mainSection}${additionalRetreateesSection}${paymentDetails}${signatureSection}`;
    const paymentConfirmationhtmlBody = `${paymentConfirmation}${signatureSection}`;
    const contactUsConfirmationhtmlBody = `${contactUsConfirmation}${signatureSection}`;
    const newsletterConfirmationhtmlBody = `${newsletterConfirmation}${signatureSection}`;

    const result = await callApi({
      url: "/api/generateHtml",
      method: "POST",
      body: {
        retreatConfirmationhtmlBody,
        paymentConfirmationhtmlBody,
        contactUsConfirmationhtmlBody,
        newsletterConfirmationhtmlBody,
      },
    });
  };

  return (
    <Fragment>
      <LinkButton onClick={generateHtml}>Generate HTML</LinkButton>
    </Fragment>
  );
}
