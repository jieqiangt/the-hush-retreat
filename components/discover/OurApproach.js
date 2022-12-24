import FeatureBox from "../ui/FeatureBox";
import LinkButton from "../ui/LinkButton";
import classes from "../../sass/pages/discover.module.scss";

export default function OurApproach() {
  const features = [
    {
      imgSrc: "/trees-2-lg.jpg",
      title: "Eco Conscious",
      desc: "We believe in the concept of biophilia - where humans and life of nature are closely related. We work with our partners to minimise single-use disposables and waste.",
    },
    {
      imgSrc: "/alone-1-lg.jpg",
      title: "Exclusive",
      desc: "Our retreats are kept to small numbers to create moments for you to connect and immerse.",
    },
    {
      imgSrc: "/community-1-lg.jpg",
      title: "Community",
      desc: "We partner with like-minded vendors and brands to curate bespoke experiences for you. If you share our vision, connect with us!",
    },
  ];

  return (
    <section className={classes["approach"]}>
      <h2 className={classes["approach--title"]}>Our Approach</h2>
      <FeatureBox
        feature-box-items={features}
        featureBoxListClass={classes["approach--feature-box"]}
        featureBoxItemClass={classes["approach--feature-box--item"]}
        featureBoxItemOuterClass={classes["approach--feature-box--item--outer"]}
        featureBoxItemImgClass={classes["approach--feature-box--item--img"]}
        featureBoxItemTitleClass={classes["approach--feature-box--item--title"]}
        featureBoxItemDescClass={classes["approach--feature-box--item--desc"]}
      />
      <div className={classes["approach--cta"]}>
        <div className={classes["approach--cta--box"]}>
          <div className={classes["approach--cta--outer"]}>
            <LinkButton href="/new" btnClass={classes["approach--cta--btn"]}>
              Start Embracing Mindfulness
            </LinkButton>
          </div>
          <div className={classes["approach--cta--outer"]}>
            <LinkButton
              href="/explore"
              btnClass={classes["approach--cta--btn"]}
            >
              Explore Previous Retreats
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
