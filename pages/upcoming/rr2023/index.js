import Head from "next/head";
import { Fragment } from "react";
import Layout from "../../../components/layout/Layout";
import NewRetreatBanner from "../../../components/upcoming/NewRetreatBanner";
import NewRetreatBookingModal from "../../../components/upcoming/NewRetreatBookingModal";
import NewRetreatSection from "../../../components/upcoming/NewRetreatSection";
import NewRetreatSchedule from "../../../components/upcoming/NewRetreatSchedule";
import classes from "../../../sass/pages/rr2023.module.scss";

export default function Rr2023Page() {
  const modal = <NewRetreatBookingModal classes={classes} baseClass="book" />;

  const sectionTitle = "Set your intentions";
  const sectionText = [
    "Immerse yourself in a full-day retreat to release the stories and veils of the past.",
    "As we let go of the old year and versions of ourselves, we step through the portal into new beginnings, getting clear on what truly matters, on who we want to be, and how we serve. We birth ourselves to oursleves, through a powerful embodied intention-setting ritual.",
    "Begin the retreat with releasing what doesn't serve you anymore and enter into the second half as we set intentions for the new year. This full-day retreat will truly be a gift yourself & your loved ones. We look forward to holding space for you.",
  ];

  const guideTitle = "Stephanie Chaunte Leong";
  const guideText = [
    "I am here as your guide to lead you back home to yourself through your body.",
    "Nothing ignites me as much as this work does, because I have experienced the heart-expanding and invaluable gifts of somatics and depth psychology through my research, teachings, and training.",
    "Learning to awaken and accept all parts of the Self has allowed me to appreciate what it means to feel safe and claim full residence in my own body.",
    "My purpose is to hold space for all humans to embody this homecoming in a gentle way, so that we can experience a safe home in our bodies and ultimately, in this world.",
  ];

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

  return (
    <Fragment>
      <Head>
        <title>New Retreats</title>
        <meta name="description" content="New Retreats" />
      </Head>
      <Layout classes={classes} baseClass="rr2023" modal={modal}>
        <NewRetreatBanner classes={classes} baseClass="retreat--banner" />
        <NewRetreatSection
          classes={classes}
          baseClass="intentions"
          title={sectionTitle}
          text={sectionText}
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
        />
      </Layout>
    </Fragment>
  );
}
