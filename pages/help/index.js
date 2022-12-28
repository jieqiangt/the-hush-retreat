import Head from "next/head";
import { Fragment } from "react";
import ContactUs from "../../components/help/ContactUs";
import FAQ from "../../components/help/FAQ";
import Layout from "../../components/layout/Layout";
import classes from "../../sass/pages/help.module.scss";

export default function HelpPage() {
  return (
    <Fragment>
      <Head>
        <title>Help</title>
        <meta name="description" content="Help" />
      </Head>
      <Layout classes={classes} baseClass="help">
        <ContactUs classes={classes} baseClass="contact-us" />
        <FAQ classes={classes} baseClass="faq" />
      </Layout>
    </Fragment>
  );
}
