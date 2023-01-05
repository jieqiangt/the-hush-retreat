import Head from "next/head";
import { Fragment } from "react";
import ExploreBanner from "../../components/explore/ExploreBanner";
import PastRetreats from "../../components/explore/PastRetreats";
import Layout from "../../components/layout/Layout";
import classes from "../../sass/pages/explore.module.scss";
import { getRetreatImgs } from "../../utils/fsUtils";

export default function ExplorePage(props) {
  console.log(props.imgObj);
  return (
    <Fragment>
      <Head>
        <title>Past Retreats</title>
        <meta name="description" content="Past Retreats" />
      </Head>
      <Layout classes={classes} baseClass="explore">
        <ExploreBanner classes={classes} baseClass="banner" />
        <PastRetreats
          retreatImgs={props.retreatImgs}
          classes={classes}
          baseClass="past"
        />
      </Layout>
    </Fragment>
  );
}

export async function getStaticProps() {
  const retreats = { "aloa-x-hush": ["public", "img", "aloa-x-hush"] };

  let imgObj = {};

  for (const retreatName in retreats) {
    const retreatImgs = getRetreatImgs(retreats[retreatName], 12);
    imgObj[retreatName] = retreatImgs;
  }

  return { props: { imgObj } };
}
