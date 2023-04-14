import Head from "next/head";
import { Fragment } from "react";
import Layout from "../../components/layout/Layout";
import NewRetreatBanner from "../../components/upcoming/NewRetreatBanner";
import NewRetreatBookingModal from "../../components/upcoming/NewRetreatBookingModal";
import NewRetreatSection from "../../components/upcoming/NewRetreatSection";
import NewRetreatSchedule from "../../components/upcoming/NewRetreatSchedule";
import classes from "../../sass/pages/sweatXshakaila.module.scss";

export default function BaliGlowUpPage() {
  const pageBaseClass = "sweat-ollie";
  const modalBaseClass = "book-sweat";
  const retreatDetails = {
    title: "OUR LATEST EVENT TITLE",
    caption: "SWEAT x Shakaila: SOME CATCHPHRASE!",
    date: "07 May 2023, Sunday",
    time: "8am - 10am",
    price: "$59 per pax",
    location: "Sentosa",
    promotion:
      "**Ticket includes 1 set of Shalaika Swim swimwear of your preferred design! These are workout appropriate designs for maximum comfort and mobility.",
    btnText: "Register Here",
  };

  const sectionTitle = "WHAT TO EXPECT";
  const sectionText = ["CAPTION", "DESCRIPTION PARAGRAPH"];
  const guideTitle = "GUIDE NAME";
  const guideText = ["CAPTION", "DESCRIPTION PARAGRAPH"];

  const scheduleList = [
    {
      timeRange: "0800 - 0815",
      iconName: "icon-logo-words-circular",
      numDots: 3,
      title: "Meet Up & Intro",
      desc: "Briefing for the day!",
    },
    {
      timeRange: "0815 - 0830",
      iconName: "icon-logo-words-circular",
      numDots: 5,
      title: "Gear Up & Warm up",
      desc: "Get ready for the grind!",
    },
    {
      timeRange: "0830 - 0930",
      iconName: "icon-logo-words-circular",
      numDots: 6,
      title: "Surf HIIT",
      desc: "Time to spice up your morning exercise!",
    },
    {
      timeRange: "0930 - 0945",
      iconName: "icon-logo-words-circular",
      numDots: 6,
      title: "Revitalize",
      desc: "Cool down with a refreshing Ollie sparkling hard seltzer!",
    },
    {
      timeRange: "0945 - 1130",
      iconName: "icon-logo-words-circular",
      numDots: 0,
      title: "Closing Circle",
      desc: "Feel free to mingle around & make some memories after a workout!",
    },
  ];

  const expectImgUrlList = [
    {
      src: "/img/upcoming-pg/sweat-apr2023/swimwear-1.jpg",
      alt: "Shakaila Swimwear",
    },
    { src: "/img/upcoming-pg/sweat-apr2023/juice-1.jpg", alt: "Mou Gou Juice" },
    {
      src: "/img/upcoming-pg/sweat-apr2023/workout-1.jpg",
      alt: "Surf HIIT exercise",
    },
  ];

  const modalTitle = "SWEAT Beach Pop Up - April Edition";
  const modalCaption = "Event Details";
  const retreatId = "64361076b18c10ff91fcaf2c";

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

  const scheduleBtnText = "Register Here";

  return (
    <Fragment>
      <Head>
        <title>New Retreats</title>
        <meta name="description" content="New Retreats" />
      </Head>
      <Layout classes={classes} baseClass={pageBaseClass} modal={modal}>
        <NewRetreatBanner
          classes={classes}
          baseClass="banner"
          retreatDetails={retreatDetails}
        />
        <NewRetreatSection
          classes={classes}
          baseClass="expect"
          title={sectionTitle}
          text={sectionText}
          imgUrlList={expectImgUrlList}
        />
        <NewRetreatSection
          classes={classes}
          baseClass="guide"
          title={guideTitle}
          text={guideText}
        />
        <NewRetreatSchedule
          classes={classes}
          baseClass="schedule"
          scheduleList={scheduleList}
          btnText={scheduleBtnText}
        />
      </Layout>
    </Fragment>
  );
}
