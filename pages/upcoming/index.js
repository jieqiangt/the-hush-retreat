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
      desc: "We are bringing back SWEAT: Beach Pop-Up! This time in partnership with SUURV and Ollie, join us on the beach for an hour of Surf-HIIT workout followed by a low-calorie, sparkling hard seltzer from Ollie!",
      btnText: "Book Now",
      btnHref: "/upcoming/sweatXollie",
      date: "29 Apr 2023, Saturday",
      time: " 8.30am - 10am",
      location: "Sentosa",
      price: "$ 35 per pax",
      imgSrc: ["/img/upcoming-pg/ollie-2.png", "/img/upcoming-pg/lunges-1.jpg"],
    },
    {
      header: "SWEAT x Shakaila Swim",
      title: "All Female Beach HIIT Workout",
      desc: "We are bringing back SWEAT: Beach Pop-Up for you ladies! Another partnership with SUURV and Shakaila Swim, pick your favourite bikini and join us for a fun time on the beach with other like-minded women!",
      btnText: "Book Now",
      btnHref: "/upcoming/sweatXshakaila",
      date: "07 May 2023, Sunday",
      time: " 8.30am - 10am",
      location: "Sentosa",
      price: "$ 88 per pax",
      imgSrc: [
        "/img/upcoming-pg/shakaila-2.png",
        "/img/upcoming-pg/group-1.jpg",
      ],
    },
    {
      header: "~ 4D3N The Glow Up: Bali Edition ~",
      title: "Surf & Yoga Retreat",
      desc: "DESCRIPTION",
      btnText: "Book Now",
      btnHref: "/upcoming/bali-glow-up",
      desc: "Are you ready for our FIRST ever overseas retreat? We are taking you to the beautiful West Coast of Bali to catch waves and savasana to those glorious sunsets. Whether you are a beginner or seasoned in surfing and yoga, this retreat is made for you! Let us relax, have fun and enjoy as you let your hair down with us on this 4D3N: The Glow Up Retreat!",
      date: "13 July 2023 - 16 July 2013",
      time: " ~ 7am Outbound Flight",
      location: "Bali",
      price: "$ TBC",
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
