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
      title: "ALOA x HUSH Retreat",
      content: [
        "Being present is meditation in motion - get in touch with the fundamental wonder of what it feels to be alive. Join us on this thoughtfully curated, hassle-free 2d1n luxe retreat, where we step into a sanctuary, away from the hustle of life. Practice to be. Slow down with us. ",
        "Through guided rituals, we tap deeper into our senses to purify our detachments, embrace healthier practices and nurture a deeper inward connection. Emerge with renewed clarity and a rejuvenated mind.",
      ],
      pathDir: ["public", "img", "aloa-x-hush"],
    },
  ];

  const retreatsWithImg = retreats.map((item) => {
    let galleryDetails = getGalleryDetails(item["pathDir"], 10);
    return { ...item, galleryDetails };
  });

  return { props: { retreatsWithImg } };
}
