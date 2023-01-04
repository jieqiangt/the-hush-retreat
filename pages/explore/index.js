import Head from "next/head";
import { Fragment } from "react";
import ExploreBanner from "../../components/explore/ExploreBanner";
import PastRetreats from "../../components/explore/PastRetreats";
import Layout from "../../components/layout/Layout";
import classes from "../../sass/pages/explore.module.scss";

export default function ExplorePage() {
  return (
    <Fragment>
      <Head>
        <title>Past Retreats</title>
        <meta name="description" content="Past Retreats" />
      </Head>
      <Layout classes={classes} baseClass="explore">
        <ExploreBanner classes={classes} baseClass="banner" />
        <PastRetreats classes={classes} baseClass="past" />
      </Layout>
    </Fragment>
  );
}
