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
      title: "Release & Renew 2023",
      content: [
        "Immerse yourself in a full-day retreat to release the stories and veils of the past, through somatic practices of stillness and movement, purified with a fire ceremony. As we let go of the old year and versions of ourselves, we step through the portal into new beginnings, getting clear on what truly matters, on who we want to be, and how we serve. We birth ourselves to ourselves, through a powerful embodied intention-setting ritual. Somatic practices include breathwork, embodied dance-movement, expressive art, conscious dreaming, journaling and conscious conversations.",
      ],
      pathDir: ["public", "img", "release-and-renew"],
    },
    {
      title: "Here & Now 2022",
      content: [
        "Being present is meditation in motion - get in touch with the fundamental wonder of what it feels to be alive. Join us on this thoughtfully curated, hassle-free 2d1n luxe retreat, where we step into a sanctuary, away from the hustle of life. Practice to be. Slow down with us. Through guided rituals, we tap deeper into our senses to purify our detachments, embrace healthier practices and nurture a deeper inward connection. Emerge with renewed clarity and a rejuvenated mind.",
      ],
      pathDir: ["public", "img", "here-and-now"],
    },
  ];

  const retreatsWithImg = retreats.map((item) => {
    let galleryDetails = getGalleryDetails(item["pathDir"], 8);
    return { ...item, galleryDetails };
  });

  return { props: { retreatsWithImg } };
}
