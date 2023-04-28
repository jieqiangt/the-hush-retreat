import Head from "next/head";
import { Fragment } from "react";
import ExploreBanner from "../../components/explore/ExploreBanner";
import PastRetreats from "../../components/explore/PastRetreats";
import Layout from "../../components/layout/Layout";
import classes from "../../sass/pages/explore.module.scss";
import { getGalleryDetails } from "../../utils/fsUtils";

export default function ExplorePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Past Retreats</title>
        <meta name="description" content="Past Retreats" />
      </Head>
      <Layout classes={classes} baseClass="explore">
        <ExploreBanner classes={classes} baseClass="banner" />
        <PastRetreats
          retreats={props.retreatsWithImg}
          classes={classes}
          baseClass="past"
        />
      </Layout>
    </Fragment>
  );
}

export async function getStaticProps() {
  const retreats = [
    {
      title: "SWEAT x SUURV ~ Mar 2023",
      content: [
        "In celebration of International Women's Day, SUURV & The Hush Retreats collaborated on an event, for the first time on 26th March 2023, Sunday! The founders of SUURV - Seraphina & Hush Retreat - Mandi, led a group of strong willed & like-minded women in an hour of Surf-HIIT workout! Not only did everyone had a productive & fun morning beach surf HIIT, they managed to do so looking good in Shakaila Swimwear! Look out for more exciting collobarations coming up ahead!",
      ],
      pathDir: ["public", "img", "sweat-20230326"],
      retreatId: "sweat-suurv",
    },
    {
      title: "Accenture All Access Day x R1OT ~ Mar 2023",
      content: ["SOME DESCRIPTION!"],
      pathDir: ["public", "img", "all-access-day"],
      retreatId: "accenture-all-access",
    },
    {
      title: "Release & Renew ~ Jan 2023",
      content: [
        "Immerse yourself in a full-day retreat to release the stories and veils of the past, through somatic practices of stillness and movement, purified with a fire ceremony. As we let go of the old year and versions of ourselves, we step through the portal into new beginnings, getting clear on what truly matters, on who we want to be, and how we serve. We birth ourselves to ourselves, through a powerful embodied intention-setting ritual. Somatic practices include breathwork, embodied dance-movement, expressive art, conscious dreaming, journaling and conscious conversations.",
      ],
      pathDir: ["public", "img", "release-and-renew"],
      retreatId: "release-and-renew",
    },
    {
      title: "Here & Now ~ Oct 2022",
      content: [
        "Being present is meditation in motion - get in touch with the fundamental wonder of what it feels to be alive. Join us on this thoughtfully curated, hassle-free 2d1n luxe retreat, where we step into a sanctuary, away from the hustle of life. Practice to be. Slow down with us. Through guided rituals, we tap deeper into our senses to purify our detachments, embrace healthier practices and nurture a deeper inward connection. Emerge with renewed clarity and a rejuvenated mind.",
      ],
      pathDir: ["public", "img", "here-and-now"],
      retreatId: "here-and-now",
    },
  ];

  const retreatsWithImg = retreats.map((item) => {
    let galleryDetails = getGalleryDetails(item["pathDir"], 8);
    return { ...item, galleryDetails };
  });

  return { props: { retreatsWithImg } };
}
