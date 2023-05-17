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
    "From the ocean to the mat, this retreat is the ultimate balance of adventure and relaxation. Join the dynamic duo - Mandi (Founder of The Hush Retreats) and Seraphina (Founder of SUURV) to ride the waves and find your zen! ",
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
    "Unleash your inner adventurer with SUURV and embark on a transformative journey at our local surf camp, nestled in the captivating beauty of Bali! Elevate your wellness retreat with the invigorating thrill of mastering the waves, all while indulging in the luxurious comforts that await you!",
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
    "Together with fellow like-minded and supportive individuals, you get to start and end your day with a mindful yoga practice, and learn how to surf in a fun and safe environment! Suitable for all levels, even first-timers. Get ready for all that Sun, Surf and Savasana!",
  ];

  const scheduleTitle = "Your Journey";
  const scheduleList = [
    {
      timeRange: "Day 1",
      iconName: "icon-logo-words-circular",
      numDots: 16,
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
      numDots: 16,
      title: "Surf’s Up",
      desc: [
        "Morning Yoga Stretch",
        "SUURV Sessions 1 & 2",
        "Midday Massage",
        "Evening Zen Yoga + Journaling",
      ],
    },
    {
      timeRange: "Day 3",
      iconName: "icon-logo-words-circular",
      numDots: 22,
      title: "Catching Waves & Zs",
      desc: [
        "Morning Yoga Stretch",
        "SUURV Sessions 3 & 4",
        "Midday Massage",
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
        "Morning Yoga Stretch",
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
    date: "13th Jul - 16th Jul / 10th Aug - 13th Aug",
    btnText: "Register Here",
    price: "888",
    location: "Bali",
    promotion: "** Register as a Duo & it will be $777 per pax!",
    retreatOptions: {
      "retreat-date": [
        {
          value: [
            "62a19ce1-0cf3-413f-bc0e-d415a1a9ee8c",
            "13th July - 16th July",
          ],
          name: "13th July - 16th July",
        },
        {
          value: [
            "8a420420-8e02-4857-829c-c981bc9d4b51",
            "10th Aug - 13th Aug",
          ],
          name: "10th Aug - 13th Aug",
        },
      ],
    },
    selectOptions: "",
  };

  const modal = (
    <NewRetreatBookingModal
      classes={classes}
      baseClass={modalBaseClass}
      modalTitle={modalTitle}
      modalCaption={modalCaption}
      retreat={retreat}
      isModal={true}
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
        {/* <NewRetreatSection
          classes={classes}
          baseClass="accomodation"
          title={accomodationTitle}
          caption={accomodationCaption}
          text={accomodationText}
          imgUrlList={accomodationImgUrlList}
        /> */}
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
