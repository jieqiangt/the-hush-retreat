import Head from "next/head";
import { Fragment } from "react";
import ExploreBanner from "../../components/explore/ExploreBanner";
import PastRetreats from "../../components/explore/PastRetreats";
import Layout from "../../components/layout/Layout";
import classes from "../../sass/pages/explore.module.scss";
import { getRetreatImgs } from "../../utils/fsUtils";

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
      content:
        "Aliqua ex Lorem et sit sint id do ad velit velit excepteur sint. In excepteur qui amet ullamco elit nisi labore. In magna cupidatat ipsum aliqua exercitation cupidatat laboris ea anim veniam.",
      pathDir: ["public", "img", "aloa-x-hush"],
    },
  ];

  const retreatsWithImg = retreats.map((item) => {
    let galleryDetails = getRetreatImgs(item["pathDir"], 12);
    return { ...item, galleryDetails };
  });

  return { props: { retreatsWithImg } };
}
