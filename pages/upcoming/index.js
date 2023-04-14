import Head from "next/head";
import { Fragment } from "react";
import Layout from "../../components/layout/Layout";
import NewRetreatSummary from "../../components/upcoming/NewRetreatSummary";
import UpcomingBanner from "../../components/upcoming/UpcomingBanner";
import classes from "../../sass/pages/upcoming.module.scss";

export default function UpcomingPage() {
  const retreats = [
    {
      header: "~ SWEAT x Ollie ~ ",
      title: "Mixed Gender Beach HIIT Workout",
      caption: "SOME CAPTION!",
      desc: "SOME DESCRIPTION!",
      btnText: "Book Now",
      btnHref: "/upcoming/sweatXollie",
      date: "29 Apr 2023, Saturday",
      time: " 8.30am - 10am",
      location: "Sentosa",
      price: "$ 59 per pax",
      imgSrc: ["/img/upcoming-pg/plan-1.jpg", "/img/upcoming-pg/group-2.jpg"],
    },
    {
      header: "SWEAT x Shakaila Swim",
      title: "All Female Beach HIIT Workout",
      caption:
        "Let us take you out and your bestie out to spice up your morning exercise! Choose your set of Shakaila Swimwear and join us for an hour of Surf-HIIT workout!",
      desc: "Back due to the overwhelming positive response, SUURV and The Hush Retreats collaborating again this month on the 7th May 2023, Sunday! Join us for another productive grind on s Sunday morning!",
      btnText: "Book Now",
      btnHref: "/upcoming/sweatXshakaila",
      date: "07 May 2023, Sunday",
      time: " 8.30am - 10am",
      location: "Sentosa",
      price: "$ 59 per pax",
      imgSrc: ["/img/upcoming-pg/group-1.jpg", "/img/upcoming-pg/lunges-1.jpg"],
    },
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
