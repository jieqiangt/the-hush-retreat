import Head from "next/head";
import { Fragment } from "react";
import Layout from "../../components/layout/Layout";
import NewRetreatBanner from "../../components/upcoming/NewRetreatBanner";
import NewRetreatBookingModal from "../../components/upcoming/NewRetreatBookingModal";
import NewRetreatSection from "../../components/upcoming/NewRetreatSection";
import NewRetreatSchedule from "../../components/upcoming/NewRetreatSchedule";
import classes from "../../sass/pages/bali-glow-up.module.scss";

export default function BaliGlowUpPage() {
  const pageBaseClass = "bali-glow-up";
  const modalBaseClass = "book-bali";

  const hostTitle = "Your Wellness Hosts";
  const hostCaption = ["SUURV x The Hush Retreats", "Founders Collaboration"];
  const hostText = [
    "Start your wellness journey with Seraphina - SUURV & Mandi - The Hush Retreats. Let us bring you through a transformative wellness experience in Bali. Your role is to show up, sit back and unwind - we take care of the rest for you.",
  ];

  const accomodationTitle = "Your Home In Bali";
  const accomodationCaption = ["Villa Florimar ~ Managed by The Luxe Nomad"];
  const accomodationText = [
    "Super sleek and sexy, but fabulously comfortable, Villa Florimar would not be out of place in one of the world’s fashion capitals, yet this impressive five-bedroom villa is located in the beautiful and very traditional Balinese village, just a stone’s throw from the beach. A perfect place to zen & cool down after a fruitful day surfing at the beach.",
  ];

  const accomodationImgUrlList = [
    {
      src: "/img/upcoming-pg/bali-glowup/resort-3.jpg",
      alt: "Bedroom Image of Resort",
    },
    {
      src: "/img/upcoming-pg/bali-glowup/resort-1.jpg",
      alt: "Front Image of Resort",
    },
    {
      src: "/img/upcoming-pg/bali-glowup/resort-2.jpg",
      alt: "Dining area of Resort",
    },
  ];

  const surfTitle = "SUURV & IMMERSE";
  const surfCaption = ["SUURV ~ Learn to Surf in Style in Bali"];
  const surfText = [
    "Unleash your inner adventurer with SUURV and embark on a transformative journey at our local surf camp, nestled in the captivating beauty of Bali. Elevate your wellness retreat with the invigorating thrill of mastering the waves, all while indulging in the luxurious comforts that await you.",
  ];
  const surfImgUrlList = [
    {
      src: "/img/upcoming-pg/bali-glowup/seraphina-2.jpg",
      alt: "Image of Seraphina Surfing",
    },
    {
      src: "/img/upcoming-pg/bali-glowup/seraphina-1.jpg",
      alt: "Image of Seraphina Surfing",
    },
    {
      src: "/img/upcoming-pg/bali-glowup/seraphina-3.jpg",
      alt: "Image of Seraphina Surfing",
    },
  ];

  const yogaTitle = "Hush & Zen";
  const yogaCaption = ["The Hush Retreats ~ Wind Down with Zen Yoga"];
  const yogaText = [
    "Experience the harmonious rhythm of Bali's waves as you embark on a transformative journey. Immerse yourself in meditative yoga and soulful journaling, awakening inner peace and cultivating mindfulness beneath the island's serene sky.",
  ];

  const scheduleTitle = "Your Journey";
  const scheduleList = [
    {
      timeRange: "Day 1",
      iconName: "icon-logo-words-circular",
      numDots: 14,
      title: "Shaka!",
      desc: [
        "Arrival & Check-In",
        "Opening Circle & Briefing",
        "Intro to Surfing: Theory + Your Coaches",
      ],
    },
    {
      timeRange: "Day 2",
      iconName: "icon-logo-words-circular",
      numDots: 14,
      title: "Surf’s Up",
      desc: [
        "SUURV Sessions 1 & 2",
        "Midday Yoga Stretch",
        "Evening Zen Yoga + Journaling",
      ],
    },
    {
      timeRange: "Day 3",
      iconName: "icon-logo-words-circular",
      numDots: 20,
      title: "Catching Waves & Zs",
      desc: [
        "SUURV Sessions 3 & 4",
        "Midday Yoga Stretch",
        "Evening Zen Yoga & Journaling",
        "BBQ Dinner Party",
      ],
    },
    {
      timeRange: "Day 4",
      iconName: "icon-logo-words-circular",
      numDots: 0,
      title: "Sampai Jumpa!",
      desc: [
        "SUURV Session 5",
        "Journaling & Reflection",
        "Closing Circle",
        "Check-Out & Goodbye",
      ],
    },
  ];

  const modalTitle = "The Glow Up: Bali Edition";
  const modalCaption = "Event Details";
  const retreat = {
    _id: "_123",
    name: "The Glow Up: Bali Edition",
    title: "The Glow Up: Bali Edition",
    caption: "Glow Up x SUURV - Surf & Zen at Bali",
    btnText: "Register Here",
    date: "13 May 2023, Saturday",
    time: "8am - 10am",
    price: "TBC",
    location: "Bali",
    promotion: "",
    desc: "Some Description",
    selectOptions: {
      dietary: [
        { value: "none", name: "No Restriction" },
        { value: "vegetarian", name: "Vegetarian" },
        { value: "vegan", name: "Vegan" },
        { value: "pescatarian", name: "Pescatarian" },
        { value: "noBeef", name: "No Beef" },
        { value: "noPork", name: "No Pork" },
        { value: "others", name: "Others" },
      ],
      accomodation: [
        { value: "a", name: "A" },
        { value: "b", name: "B" },
        { value: "c", name: "C" },
        { value: "d", name: "D" },
      ],
    },
  };

  const queryMsg =
    "** Do indicate your dietary preference below if you have chosen others";

  const modal = (
    <NewRetreatBookingModal
      classes={classes}
      baseClass={modalBaseClass}
      modalTitle={modalTitle}
      modalCaption={modalCaption}
      queryMsg={queryMsg}
      retreat={retreat}
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
          retreat={retreat}
        />
        <NewRetreatSection
          classes={classes}
          baseClass="hosts"
          title={hostTitle}
          caption={hostCaption}
          text={hostText}
        />
        <NewRetreatSection
          classes={classes}
          baseClass="accomodation"
          title={accomodationTitle}
          caption={accomodationCaption}
          text={accomodationText}
          imgUrlList={accomodationImgUrlList}
        />
        <NewRetreatSection
          classes={classes}
          baseClass="surf"
          title={surfTitle}
          caption={surfCaption}
          text={surfText}
          imgUrlList={surfImgUrlList}
        />
        <NewRetreatSection
          classes={classes}
          baseClass="yoga"
          title={yogaTitle}
          caption={yogaCaption}
          text={yogaText}
        />

        <NewRetreatSchedule
          classes={classes}
          baseClass="schedule"
          title={scheduleTitle}
          scheduleList={scheduleList}
          btnText="Register Here"
        />
      </Layout>
    </Fragment>
  );
}
