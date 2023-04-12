import Head from "next/head";
import { Fragment } from "react";
import Layout from "../../components/layout/Layout";
import NewRetreatSummary from "../../components/upcoming/NewRetreatSummary";
import UpcomingBanner from "../../components/upcoming/UpcomingBanner";
import classes from "../../sass/pages/upcoming.module.scss";

export default function UpcomingPage() {
  const retreats = [
    {
      header: "~ 4D3N The Glow Up: Bali Edition ~",
      title: "Surf & Yoga Retreat",
      caption:
        "Bring your BFF to learn surfing and enjoy daily yoga practices while bonding with like-minded ladies in the beautiful West Coast of Bali!",
      desc: "The Hush Retreats, SUURV and Shakaila Swim are bringing you to Bali for a 4D3N The Glow Up Retreat! In celebration of International Women's Day, we put together an All-Women's Surf & Yoga Retreat hosted by Mandi and Seraphina (Founder of SUURV and Shakaila Swim).",
      btnText: "Book Now",
      btnHref: "/upcoming/bali-glow-up",
      date: "Mid August 2023",
      time: " ~ 4.00pm Flight",
      location: "Bali",
      price: "$ 989 per pax",
      imgSrc: ["/img/upcoming-pg/accom-1.jpg", "/img/upcoming-pg/host-1.jpg"],
    },
    {
      header: "~ SWEAT Beach Pop Up : April Edition ~",
      title: "Surf HIIT Workout",
      caption:
        "Let us take you out and spice up your morning exercise! Choose your set of Shakaila Swimwear and join us for an hour of Surf-HIIT workout!",
      desc: "Back due to the overwhelming positive response, SUURV and The Hush Retreats collaborating again on not 1 but 2 Beach Pop-Ups this month on the XX Apr 2023 - XXXday & XX Apr 2023 - XXXday!",
      btnText: "Book Now",
      btnHref: "/upcoming/sweat-apr2023",
      date: "XX Apr 2023 / XX Apr 2023",
      time: " 9am - 11.30am",
      location: "Sentosa",
      price: "$ 59 per pax",
      imgSrc: [
        "/img/upcoming-pg/sweat-group-1.jpg",
        "/img/upcoming-pg/lunges-1.jpg",
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
          <NewRetreatSummary
            key={idx}
            classes={classes}
            baseClass={`new--${idx}`}
            summary={item}
          />
        ))}
      </Layout>
    </Fragment>
  );
}
