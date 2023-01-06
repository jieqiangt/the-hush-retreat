import Head from "next/head";
import { Fragment } from "react";
import ExploreBanner from "../../components/explore/ExploreBanner";
import PastRetreats from "../../components/explore/PastRetreats";
import Layout from "../../components/layout/Layout";
import classes from "../../sass/pages/explore.module.scss";
import { getGalleryDetails, getRetreatImgs } from "../../utils/fsUtils";

export default function ExplorePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Past Retreats</title>
        <meta name="description" content="Past Retreats" />
      </Head>
      <Layout classes={classes} baseClass="explore">
        <ExploreBanner classes={classes} baseClass="banner" />
        <PastRetreats
          retreats={props.retreatsWithImg}
          classes={classes}
          baseClass="past"
        />
      </Layout>
    </Fragment>
  );
}

export async function getStaticProps() {
  const retreats = [
    {
      title: "ALOA x HUSH Retreat",
      content: [
        "Reprehenderit consequat sit nostrud laboris.Minim ullamco velit nulla est sunt ea.Dolor elit sint adipisicing cillum proident duis id est.Sunt aliqua excepteur incididunt reprehenderit.Irure sit sit aliquip nulla consequat magna exercitation nulla reprehenderit amet veniam incididunt magna.",
        "Dolor culpa aliqua nulla esse.Excepteur anim Lorem veniam esse incididunt anim.Veniam consectetur ipsum nisi est minim in dolor pariatur do eu in sint.Dolor tempor esse pariatur dolore est proident in magna esse.Occaecat tempor incididunt exercitation nulla est culpa velit est.Proident magna.",
      ],
      pathDir: ["public", "img", "aloa-x-hush"],
    },
  ];

  const retreatsWithImg = retreats.map((item) => {
    let galleryDetails = getGalleryDetails(item["pathDir"], 10);
    return { ...item, galleryDetails };
  });

  return { props: { retreatsWithImg } };
}
