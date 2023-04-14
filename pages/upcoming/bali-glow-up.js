import Head from "next/head";
import { Fragment } from "react";
import Layout from "../../components/layout/Layout";
import NewRetreatBanner from "../../components/upcoming/NewRetreatBanner";
import NewRetreatBookingModal from "../../components/upcoming/NewRetreatBookingModal";
import NewRetreatSection from "../../components/upcoming/NewRetreatSection";
import NewRetreatSchedule from "../../components/upcoming/NewRetreatSchedule";
import classes from "../../sass/pages/bali-glow-up.module.scss";

export default function BaliGlowUpPage() {
  const pageBaseClass = "bali--glow-up";
  const modalBaseClass = "book-bali";

  const sectionTitle = "WHAT TO EXPECT";
  const sectionText = ["CAPTION", "DESCRIPTION PARAGRAPH"];
  const guideTitle = "GUIDE NAME";
  const guideText = ["CAPTION", "DESCRIPTION PARAGRAPH"];

  const retreatDetails = {
    title: "OUR LATEST EVENT TITLE",
    caption: "The Glow Up: Bali Edition",
    date: "13 May 2023, Saturday",
    time: "8am - 10am",
    price: "$599 per pax",
    location: "Bali",
    btnText: "Register Here",
  };

  const scheduleList = [
    {
      timeRange: "0900 - 0930",
      iconName: "icon-logo-words-circular",
      numDots: 4,
      title: "Opening Circle",
    },
    {
      timeRange: "0945 - 1215",
      iconName: "icon-logo-words-circular",
      numDots: 10,
      title: "Release",
      desc: "Breathwork, Embodied Dance Movement, Journalling, Fire Ceremony, Meditation",
    },
    {
      timeRange: "1230 - 1330",
      iconName: "icon-logo-words-circular",
      numDots: 6,
      title: "Lunch @ Tamarind Hill",
      desc: "Vegeterian & non-vegeterain options available.",
    },
    {
      timeRange: "1400 - 1600",
      iconName: "icon-logo-words-circular",
      numDots: 10,
      title: "Renew",
      desc: "Breathwork, Expressive Art, Write A Letter To Yourself, Somatic Movement, Conscious Dreaming",
    },
    {
      timeRange: "1615 - 1645",
      iconName: "icon-logo-words-circular",
      title: "Closing Circle",
    },
  ];

  const modalTitle = "The Glow Up: Bali Edition";
  const modalCaption = "Event Details";
  const retreatId = "64360f8eb18c10ff91fcaf2a";

  const modal = (
    <NewRetreatBookingModal
      classes={classes}
      baseClass={modalBaseClass}
      modalTitle={modalTitle}
      modalCaption={modalCaption}
      retreatDetails={retreatDetails}
      retreatsId={retreatId}
    />
  );

  return (
    <Fragment>
      <Head>
        <title>New Retreats</title>
        <meta name="description" content="New Retreats" />
      </Head>
      <Layout classes={classes} baseClass={pageBaseClass} modal={modal}>
        <NewRetreatBanner
          classes={classes}
          baseClass="retreat--banner"
          retreatDetails={retreatDetails}
        />
        <NewRetreatSection
          classes={classes}
          baseClass="intentions"
          title={sectionTitle}
          text={sectionText}
        />
        <NewRetreatSection
          classes={classes}
          baseClass="intentions"
          title={guideTitle}
          text={guideText}
        />
        <NewRetreatSchedule
          classes={classes}
          baseClass="schedule"
          scheduleList={scheduleList}
        />
      </Layout>
    </Fragment>
  );
}
