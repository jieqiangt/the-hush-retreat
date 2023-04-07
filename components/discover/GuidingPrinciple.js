import Banner from "../ui/Banner";

export default function GuidingPrinciple(props) {
  const title = "Our Guiding Principle";
  const { baseClass, classes } = props;

  const bannerDetails = (
    <p className={classes[`${baseClass}--caption`]}>
      Living life with unwavering faith and joy, <br />
      as the <span className={classes[`${baseClass}--em`]}> lotus </span>
      does, <br />
      to ensure the most beautiful revival
    </p>
  );

  return (
    <Banner
      title={title}
      baseClass={baseClass}
      classes={classes}
      bannerDetails={bannerDetails}
    />
  );
}
