import FeatureBox from "../ui/FeatureBox";
import LinkButton from "../ui/LinkButton";
import Icon from "../ui/Icon";

export default function OurApproach(props) {
  const features = [
    {
      imgSrc: "/img/trees-1-lg.jpg",
      title: "Eco Conscious",
      desc: "We believe in the concept of biophilia - where humans and life of nature are closely related. We work with our partners to minimise single-use disposables and waste.",
    },
    {
      imgSrc: "/img/exclusive-1-lg.jpg",
      title: "Exclusive",
      desc: "Our retreats are kept to small numbers to create moments for you to connect and immerse.",
    },
    {
      imgSrc: "/img/community-1-lg.jpg",
      title: "Community",
      desc: "We partner with like-minded vendors and brands to curate bespoke experiences for you. If you share our vision, connect with us!",
    },
  ];
  const { baseClass, classes } = props;

  return (
    <section className={classes[baseClass]}>
      <Icon
        iconClass={`${classes[`${baseClass}--icon`]} hidden`}
        iconName="icon-logo-no-words-sm"
      />
      <h2 className={`${classes[`${baseClass}--title`]} hidden`}>
        Our Approach
      </h2>
      <FeatureBox
        feature-box-items={features}
        featureBoxListClass={classes[`${baseClass}--feature-box`]}
        featureBoxItemClass={`${
          classes[`${baseClass}--feature-box--item`]
        } hidden`}
        featureBoxItemImgBoxClass={`${classes[`${baseClass}--feature-box--item--imgbox`]}`}
        featureBoxItemImgClass={classes[`${baseClass}--feature-box--item--img`]}
        featureBoxItemTitleClass={
          classes[`${baseClass}--feature-box--item--title`]
        }
        featureBoxItemDescClass={
          classes[`${baseClass}--feature-box--item--desc`]
        }
      />
      <div className={`${classes[`${baseClass}--cta`]} hidden`}>
        <div className={classes[`${baseClass}--cta--box`]}>
          <div className={classes[`${baseClass}--cta--outer`]}>
            <LinkButton
              href="/upcoming"
              btnClass={classes[`${baseClass}--cta--btn`]}
            >
              Start Embracing Mindfulness
            </LinkButton>
          </div>
          <div className={classes[`${baseClass}--cta--outer`]}>
            <LinkButton
              href="/explore"
              btnClass={classes[`${baseClass}--cta--btn`]}
            >
              Explore Previous Retreats
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
