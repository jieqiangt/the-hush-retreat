import Head from "next/head";
import { Fragment } from "react";
import Layout from "../../components/layout/Layout";
import NewRetreatBanner from "../../components/new/NewRetreatBanner";
import NewRetreatExpect from "../../components/new/NewRetreatExpect";
import NewRetreatGuide from "../../components/new/NewRetreatGuide";
import NewRetreatIntentions from "../../components/new/NewRetreatIntentions";
import NewRetreatSchedule from "../../components/new/NewRetreatSchedule";
import classes from "../../sass/pages/new.module.scss";

export default function NewPage() {
  return (
    <Fragment>
      <Head>
        <title>New Retreats</title>
        <meta name="description" content="New Retreats" />
      </Head>
      <Layout classes={classes} baseClass="new">
        <NewRetreatBanner classes={classes} baseClass="retreat--banner" />
        <NewRetreatIntentions classes={classes} baseClass="intentions" />
        <NewRetreatExpect classes={classes} baseClass="expect" />
        <NewRetreatGuide classes={classes} baseClass="guide" />
        <NewRetreatSchedule classes={classes} baseClass="schedule" />
      </Layout>
    </Fragment>
  );
}
