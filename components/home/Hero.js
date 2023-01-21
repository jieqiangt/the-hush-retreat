import { Fragment } from "react";
import LinkButton from "../ui/LinkButton";
import Banner from "../ui/Banner";

export default function Hero(props) {
  const { baseClass, classes } = props;
  const title = "Modern Wellness Lifestyle";
  const bannerDetails = (
    <Fragment>
      <article className={classes[`${baseClass}--article`]}>
        Luxurious tranquil retreats,
        <br />
        embrace mindfullness,
        <br />
        for your inner soul
      </article>
      <LinkButton
        href="upcoming"
        btnClass={classes[`${baseClass}--btn`]}
      >
        Start Healing Now
      </LinkButton>
    </Fragment>
  );

  return (
    <Fragment>
      <Banner
        title={title}
        baseClass={baseClass}
        classes={classes}
        bannerDetails={bannerDetails}
      />
    </Fragment>
  );
}
