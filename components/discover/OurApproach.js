import FeatureList from "../ui/FeatureList";
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
      <h2
        className={`${classes["section--title"]} ${classes["approach--title"]}`}
      >
        Our Approach
      </h2>
      <FeatureList features={features} />
      <div className={classes["approach--cta"]}>
        <div className={classes["approach--cta--outer"]}>
          <span className={classes["approach--cta--btn"]}>
            <LinkButton href="/new">Start Embracing Mindfulness</LinkButton>
          </span>
        </div>
        <div className={classes["approach--cta--outer"]}>
          <span className={classes["approach--cta--btn"]}>
            <LinkButton href="/explore">Explore More</LinkButton>
          </span>
        </div>
      </div>
    </section>
  );
}
