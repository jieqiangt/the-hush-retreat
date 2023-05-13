import Head from "next/head";
import { Fragment } from "react";
import Layout from "../../components/layout/Layout";
import NewRetreatSummary from "../../components/upcoming/NewRetreatSummary";
import classes from "../../sass/pages/upcoming.module.scss";
import Banner from "../../components/ui/Banner";

export default function UpcomingPage() {
  const retreats = [
    {
      header: "~ 4D3N The Glow Up: Bali Edition ~",
      title: "Surf & Yoga Retreat",
      desc: "DESCRIPTION",
      btnText: "Learn More",
      btnHref: "/upcoming/bali-glow-up",
      desc: "Are you ready for our FIRST ever overseas retreat? We are taking you to the beautiful West Coast of Bali to catch waves and savasana to those glorious sunsets. Whether you are a beginner or seasoned in surfing and yoga, this retreat is made for you! Let us relax, have fun and enjoy as you let your hair down with us on this 4D3N: The Glow Up Retreat!",
      date: "13 July 2023 - 16 July 2013",
      time: " ~ 7am Flight",
      location: "Bali",
      price: "TBC",
      imgSrc: ["/img/upcoming-pg/accom-1.jpg", "/img/upcoming-pg/host-1.jpg"],
    },
  ];

  const title = "Our Upcoming Retreats";
  const caption = "Start your wellness journey with us today";
  const bannerDetails = (
    <div className={classes["banner--details"]}>
      Find a retreat that suits your needs below
    </div>
  );

  return (
    <Fragment>
      <Head>
        <title>New Retreats</title>
        <meta name="description" content="New Retreats" />
      </Head>
      <Layout classes={classes} baseClass="upcoming">
        <Banner
          classes={classes}
          baseClass="banner"
          title={title}
          caption={caption}
          bannerDetails={bannerDetails}
        />
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
