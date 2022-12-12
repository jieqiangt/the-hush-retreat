import Head from "next/head";
import { Fragment } from "react";
import Hero from "../components/home/Hero";
import Layout from "../components/layout/Layout";
import classes from "../sass/pages/home.module.scss";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
      </Head>
      <Layout firstSection={Hero} headerClass={classes["header--home"]}>
      </Layout>
    </Fragment>
  );
}
