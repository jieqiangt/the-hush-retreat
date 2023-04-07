import { Fragment } from "react";
import LinkButton from "../ui/LinkButton";
import Banner from "../ui/Banner";

export default function Hero(props) {
  const { baseClass, classes } = props;
  const title = "Modern Wellness Lifestyle";
  const bannerCaption = (
    <Fragment>
      Luxurious tranquil retreats,
      <br />
      embrace mindfullness,
      <br />
      for your inner soul
    </Fragment>
  );
  const bannerDetails = (
    <LinkButton href="upcoming" btnClass={classes[`${baseClass}--btn`]}>
      Start Healing Now
    </LinkButton>
  );

  return (
    <Fragment>
      <Banner
        title={title}
        baseClass={baseClass}
        classes={classes}
        caption={bannerCaption}
        bannerDetails={bannerDetails}
      />
    </Fragment>
  );
}
