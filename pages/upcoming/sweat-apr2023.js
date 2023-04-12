import Head from "next/head";
import { Fragment } from "react";
import Layout from "../../components/layout/Layout";
import NewRetreatBanner from "../../components/upcoming/NewRetreatBanner";
import NewRetreatBookingModal from "../../components/upcoming/NewRetreatBookingModal";
import NewRetreatSection from "../../components/upcoming/NewRetreatSection";
import NewRetreatSchedule from "../../components/upcoming/NewRetreatSchedule";
import classes from "../../sass/pages/sweat-apr2023.module.scss";
import Icon from "../../components/ui/Icon";

export default function BaliGlowUpPage() {
  const pageBaseClass = "sweat-apr2023";
  const modalBaseClass = "book-sweat";
  const retreatDetails = {
    title: "OUR LATEST EVENT TITLE",
    caption: "SWEAT Beach Surf HIIT: Spice your morning up!",
    date: "XX Apr 2023, XXXday",
    time: "9am - 11.30am",
    price: "$59 per pax",
    location: "Sentosa",
    promotion: " ",
    btnText: "Register Here",
  };

  const sectionTitle = "WHAT TO EXPECT";
  const sectionText = ["CAPTION", "DESCRIPTION PARAGRAPH"];
  const guideTitle = "GUIDE NAME";
  const guideText = ["CAPTION", "DESCRIPTION PARAGRAPH"];

  const scheduleList = [
    {
      timeRange: "0900 - 0915",
      iconName: "icon-logo-words-circular",
      numDots: 3,
      title: "Meet Up & Intro",
      desc: "Briefing for the day!",
    },
    {
      timeRange: "0915 - 0930",
      iconName: "icon-logo-words-circular",
      numDots: 5,
      title: "Gear Up & Warm up",
      desc: "Get ready in your exclusive Shakaila Swimwear!",
    },
    {
      timeRange: "0930 - 1030",
      iconName: "icon-logo-words-circular",
      numDots: 5,
      title: "Surf HIIT",
      desc: "Time to spice up your morning exercise!",
    },
    {
      timeRange: "1030 - 1045",
      iconName: "icon-logo-words-circular",
      numDots: 5,
      title: "Revitalize",
      desc: "Cool down with a refreshing Mou Gou Juice!",
    },
    {
      timeRange: "1045 - 1130",
      iconName: "icon-logo-words-circular",
      numDots: 0,
      title: "Closing Circle",
      desc: "Mingle around & make some memories!",
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
  const retreatsArr = [
    {
      _id: "64361076b18c10ff91fcaf2c",
      retreatName: "SWEAT BEACH POP UP : XX APR 2023, XXXday",
    },
    {
      _id: "6436118db18c10ff91fcaf2e",
      retreatName: "SWEAT BEACH POP UP : YY APR 2023, YYYday",
    },
  ];

  const modal = (
    <NewRetreatBookingModal
      classes={classes}
      baseClass={modalBaseClass}
      modalTitle={modalTitle}
      retreatDetails={retreatDetails}
      retreatsArr={retreatsArr}
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
