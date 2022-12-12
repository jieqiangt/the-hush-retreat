import Head from "next/head";
import { Fragment } from "react";
import Hero from "../components/home/Hero";
import Layout from "../components/layout/Layout";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
      </Head>
      <Layout firstSection={Hero} headerClass="header--home">
      </Layout>
    </Fragment>
  );
}
