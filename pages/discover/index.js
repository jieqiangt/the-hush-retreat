import Head from "next/head";
import GuidingPrinciple from "../../components/discover/GuidingPrinciple";
import OurFounder from "../../components/discover/OurFounder";
import TheWayOfLotus from "../../components/discover/TheWayOfLotus";

export default function DiscoverPage() {
  return (
    <div>
      <Head>
        <title>Discover</title>
        <meta name="description" content="Discover" />
      </Head>
      <GuidingPrinciple />
      <OurFounder />
      <TheWayOfLotus />
    </div>
  );
}

// Discover (Our Origin/Philosophy),  Experiences (Upcoming Retreats), *Logo*, Past Retreats (List of Past Retreats), Help (FAQ, Contact Us) --------------- Book a Retreat
