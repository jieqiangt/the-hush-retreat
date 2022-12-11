import FeatureList from "../ui/FeatureList";
import classes from "./sass/discover.module.scss";

export default function OurApproach() {
  const features = [
    {
      imgSrc: "#",
      title: "Eco Conscious",
      desc: "We believe in the concept of biophilia -where humans and life of nature are closely related. We work with our partners to minimise single-use disposables and waste.",
    },
    {
      imgSrc: "#",
      title: "Exclusive",
      desc: "Our retreats are kept to small numbers to create moments for you to connect and immerse.",
    },
    {
      imgSrc: "#",
      title: "Community",
      desc: "We partner with like-minded vendors and brands to curate bespoke experiences for you. If you share our vision, connect with us!",
    },
  ];

  return (
    <section className={classes["approach"]}>
      <h2 className={classes["section--title"]}>Our Approach</h2>
      <FeatureList features={features}/>
    </section>
  );
}
