import { Fragment } from "react";
import LinkButton from "../ui/LinkButton";
import Banner from "../ui/Banner";

export default function Hero(props) {

  const title="Modern Wellness Lifestyle"
  const bannerDetails = (
    <Fragment>
      <article className={props.classes[`${props.baseClass}--article`]}>
        Luxurious tranquil retreats,
        <br />
        embrace mindfullness,
        <br />
        for your inner soul
      </article>
      <LinkButton href="/new" btnClass={props.classes[`${props.baseClass}--btn`]}>
        Start Healing Now
      </LinkButton>
    </Fragment>
  );

  return (
    <Fragment>
      <Banner
        title={title}
        baseClass={props.baseClass}
        classes={props.classes}
        bannerDetails={bannerDetails}
      />
    </Fragment>
  );
}
