import Head from "next/head";
import { Fragment } from "react";
import ContactUs from "../../components/help/contactUs";
import FAQ from "../../components/help/FAQ";
import Layout from "../../components/layout/Layout";
import classes from "../../sass/pages/discover.module.scss";

export default function HelpPage() {
  return (
    <Fragment>
      <Head>
        <title>Help</title>
        <meta name="description" content="Help" />
      </Head>
      <Layout
        firstSection={ContactUs}
        headerClass={(classes["help--header"])}
        headerTitleClass={(classes["help--header--title"])}
        headerTitle = "We are here to help"
      >
      </Layout>
      <FAQ />
    </Fragment>
  );
}
