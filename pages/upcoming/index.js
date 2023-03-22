import Head from "next/head";
import { Fragment } from "react";
import Layout from "../../components/layout/Layout";
import RetreatSummary from "../../components/upcoming/RetreatSummary";
import UpcomingBanner from "../../components/upcoming/UpcomingBanner";
import classes from "../../sass/pages/upcoming.module.scss";

export default function UpcomingPage() {
  const retreats = [
    {
      title: "4D3N The Glow Up: Bali Edition (Surf & Yoga Retreat)",
      caption:
        "Bring your BFF to learn surfing and enjoy daily yoga practices while bonding with like-minded ladies in the beautiful West Coast of Bali!",
      desc: "The Hush Retreats, SUURV and Shakaila Swim are bringing you to Bali for a 4D3N The Glow Up Retreat! In celebration of International Women's Day, we put together an All-Women's Surf & Yoga Retreat hosted by Mandi and Seraphina (Founder of SUURV and Shakaila Swim).",
      btnText: "Book Now",
      btnHref: "/upcoming/bali-glow-up",
      date: "Mid August 2023",
      time: " ~ 4.00pm Flight",
      location: "Bali",
      price: "$ 989 per pax",
      imgSrc: [
        "/img/upcoming-pg/test-1-lg.jpg",
        "/img/upcoming-pg/test-2-lg.jpg",
      ],
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
