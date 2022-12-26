import Head from "next/head";
import { Fragment } from "react";
import Layout from "../../components/layout/Layout";
import RetreatAbout from "../../components/retreat/RetreatAbout";
import RetreatBanner from "../../components/retreat/RetreatBanner";
import classes from "../../sass/pages/new.module.scss";

export default function NewPage() {
  return (
    <Fragment>
      <Head>
        <title>New Retreats</title>
        <meta name="description" content="New Retreats" />
      </Head>
      <Layout
        classes={classes}
        baseClass="new"
      >
        <RetreatBanner
          title="Release & Renew"
          caption="Inner Alchemy: Releasing 2022, Birthing 2023"
          date="7 January 2023, Saturday"
          time="9am &#8211; 5pm"
          price="$399 per pax"
          location="Villa Samadhi & Labrador Nature Reserve"
          promotion="Sign up by 26 December for 10% off"
          btnText="Register Now"
          classes={classes}
          baseClass="retreat--banner"
        />
        <RetreatAbout
          title="Set your intentions"
          article={[
            "Immerse yourself in a full-day retreat to release the stories and viels of the past.",
            "As we let go of the old year and versions of ourselves, we step through the portal into new beginnings, getting clear on what truly matters, on who we want to be, and how we serve. We birth ourselves to oursleves, through a powerful embodied intention-setting ritual.",
            "Begin the retreat with releasing what doesn't serve you anymore and enter into the second half as we set intentions for the new year. This full-day retreat will truly be a gift yourself & your loved ones. We look forward to holding space for you.",
          ]}
          classes={classes}
        />
        <RetreatAbout
          title="What to expect"
          article={[
            "Immerse yourself in a full-day retreat to release the stories and veils of the past, through somatic practices, purified with a fire ceremony.",
            "Start the retreat with a refreshing juice from Mou Gou Juice and nourish your body with a delicious lunch from Tamarind Hill. You will also receive a Welcome Gift from The Hush Retreats that you can take home at the end of the retreat.",
            "Guided by Stephanie Chaunte Leong, through somatic practices, breathwork, embodied dance-movement, expressive art, conscious dreaming, journaling and a fire ceremony as she leads you back home to yourself.",
          ]}
          classes={classes}
        />
      </Layout>
    </Fragment>
  );
}
