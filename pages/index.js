import Head from "next/head";
import { Fragment } from "react";
import Bespoke from "../components/home/Bespoke";
import Hero from "../components/home/Hero";
import Immersive from "../components/home/Immersive";
import Mindfulness from "../components/home/Mindfulness";
import Testimonials from "../components/home/Testimonials";
import CorporateCustomers from "../components/home/CorporateCustomers";
import Layout from "../components/layout/Layout";
import classes from "../sass/pages/home.module.scss";
import Newsletter from "../components/home/Newsletter";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
      </Head>
      <Layout
        classes={classes}
        baseClass="home"
      >
        <Hero
          baseClass="hero"
          classes={classes}
        />
        <CorporateCustomers />
        <Bespoke />
        <Immersive />
        <Mindfulness />
        <Testimonials />
        <Newsletter />
      </Layout>
    </Fragment>
  );
}
