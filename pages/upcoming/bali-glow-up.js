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
      timeRange: "Day 1",
      iconName: "icon-logo-words-circular",
      numDots: 8,
      title: "Shaka!",
      desc: "Arrival & Check-In, Opening Circle & Briefing, Intro to Surfing: Theory + Your Coaches",
    },
    {
      timeRange: "Day 2",
      iconName: "icon-logo-words-circular",
      numDots: 8,
      title: "Surf’s Up",
      desc: "SUURV Sessions 1 & 2, Midday Yoga Stretch, Evening Zen Yoga + Journaling",
    },
    {
      timeRange: "Day 3",
      iconName: "icon-logo-words-circular",
      numDots: 16,
      title: "Catching Waves & Zs",
      desc: "SUURV Sessions 3 & 4, Midday Yoga Stretch, Evening Zen Yoga & Journaling, BBQ Dinner Party",
    },
    {
      timeRange: "Day 4",
      iconName: "icon-logo-words-circular",
      numDots: 0,
      title: "Sampai Jumpa!",
      desc: "SUURV Session 5, Journaling & Reflection, Closing Circle, Check-Out & Goodbye",
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
          btnText={"Register Here"}
        />
      </Layout>
    </Fragment>
  );
}
