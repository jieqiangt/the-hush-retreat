import Head from "next/head";
import { Fragment } from "react";
import Layout from "../../components/layout/Layout";
import classes from "../../sass/pages/new.module.scss";

export default function NewPage() {
  return (
    <Fragment>
      <Head>
        <title>New Retreats</title>
        <meta name="description" content="New Retreats" />
      </Head>
      <Layout
        pageClass={classes["new"]}
        navClass={classes["new--nav"]}
        footerClass={classes["new--footer"]}
        footerIconClass={classes["new--footer--icon"]}
      >
      </Layout>
    </Fragment>
  );
}
