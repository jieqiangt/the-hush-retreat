import Head from "next/head";
import { Fragment } from "react";
import Layout from "../../components/layout/Layout";
import RetreatSummary from "../../components/upcoming/RetreatSummary";
import UpcomingBanner from "../../components/upcoming/UpcomingBanner";
import classes from "../../sass/pages/upcoming.module.scss";

export default function UpcomingPage() {
  const retreats = [
    {
      title: "SWEAT: Beach Pop-Up!",
      caption:
        "Celebrate International Women's Day by bonding with like-minded & strong willed ladies while having a good workout on the beach!",
      desc: "This month, SUURV and The Hush Retreats are celebrating International Women's Day with a Beach Pop-Up on 26 March 2023 (Sunday). Let us take you out and spice up your morning exercise! Choose your set of Shakaila Swimwear and join us for an hour of Surf-HIIT workout!",
      btnText: "Book Now",
      btnHref: "/upcoming/rr2023",
      date: "26th March 2023, Sunday",
      time: " 9.00am",
      location: "Sentosa",
      price: "$ 99 per pax",
      imgSrc: [
        "/img/upcoming-pg/sentosa-1-lg.jpg",
        "/img/upcoming-pg/beach-hiit-1-lg.jpg",
      ],
    },
    {
      title: "4D3N The Glow Up: Bali Edition (Surf & Yoga Retreat)",
      caption:
        "Bring your BFF to learn surfing and enjoy daily yoga practices while bonding with like-minded ladies in the beautiful West Coast of Bali!",
      desc: "The Hush Retreats, SUURV and Shakaila Swim are bringing you to Bali for a 4D3N The Glow Up Retreat! In celebration of International Women's Day, we put together an All-Women's Surf & Yoga Retreat hosted by Mandi and Seraphina (Founder of SUURV and Shakaila Swim).",
      btnText: "Book Now",
      btnHref: "/upcoming/bali-glow-up",
      date: "13th May 2023 - 17th May 2023",
      time: " ~ 4.00pm Flight",
      location: "Bali",
      price: "$ 989 per pax",
      imgSrc: ["/img/upcoming-pg/surf-1-lg.jpg", "/img/upcoming-pg/yoga-2-lg.jpg"],
    },
  ];
  return (
    <Fragment>
      <Head>
        <title>New Retreats</title>
        <meta name="description" content="New Retreats" />
      </Head>
      <Layout classes={classes} baseClass="upcoming">
        <UpcomingBanner classes={classes} baseClass="banner" />
        {retreats.map((item, idx) => (
          <RetreatSummary
            classes={classes}
            baseClass={`new--${idx}`}
            summary={item}
          />
        ))}
      </Layout>
    </Fragment>
  );
}
