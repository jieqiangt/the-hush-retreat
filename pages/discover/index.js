import Head from "next/head";
import { Fragment } from "react";
import GuidingPrinciple from "../../components/discover/GuidingPrinciple";
import OurApproach from "../../components/discover/OurApproach";
import OurFounder from "../../components/discover/OurFounder";
import TheWayOfLotus from "../../components/discover/TheWayOfLotus";
import Layout from "../../components/layout/Layout";
import classes from "../../sass/pages/discover.module.scss";

export default function DiscoverPage() {
  return (
    <Fragment>
      <Head>
        <title>Discover</title>
        <meta name="description" content="Discover" />
      </Head>
      <Layout classes={classes} baseClass="discover">
        <GuidingPrinciple
          classes={classes}
          baseClass="principle"
        />
        <TheWayOfLotus />
        <OurApproach />
        <OurFounder />
      </Layout>
    </Fragment>
  );
}
