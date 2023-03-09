import Head from "next/head";
import { Fragment } from "react";
import Layout from "../../components/layout/Layout";
import classes from "../../sass/pages/upcoming.module.scss";

export default function UpcomingPage() {
  return (
    <Fragment>
      <Head>
        <title>New Retreats</title>
        <meta name="description" content="New Retreats" />
      </Head>
      <Layout classes={classes} baseClass="upcoming">
        
      </Layout>
    </Fragment>
  );
}
