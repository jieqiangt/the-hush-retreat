import Head from "next/head";
import { Fragment } from "react";
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
        
      </Layout>
    </Fragment>
  );
}
