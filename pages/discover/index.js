import Head from "next/head";
import { Fragment } from "react";
import GuidingPrinciple from "../../components/discover/GuidingPrinciple";
import OurApproach from "../../components/discover/OurApproach";
import OurFounder from "../../components/discover/OurFounder";
import TheWayOfLotus from "../../components/discover/TheWayOfLotus";
import Layout from "../../components/layout/Layout";

export default function DiscoverPage() {
  return (
    <Fragment>
      <Head>
        <title>Discover</title>
        <meta name="description" content="Discover" />
      </Head>
      <Layout firstSection={GuidingPrinciple}>
        <TheWayOfLotus />
        <OurApproach />
        <OurFounder />
      </Layout>
    </Fragment>
  );
}

// Discover (Our Origin/Philosophy),  Experiences (Upcoming Retreats), *Logo*, Past Retreats (List of Past Retreats), Help (FAQ, Contact Us) --------------- Book a Retreat
