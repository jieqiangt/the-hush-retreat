import Banner from "../ui/Banner";

export default function ExploreBanner(props) {
  const { baseClass, classes } = props;
  const title = "Modern Wellness Lifestyle";
  const caption = "Curating retreats for individuals, groups and corporates";
  const bannerDetails = (
    <div className={classes[`${baseClass}--details`]}>
      Singapore-based bespoke wellness & well-being service
      provider for retreats locally and abroad.
    </div>
  );

  return (
    <Banner
      classes={classes}
      baseClass={baseClass}
      title={title}
      caption={caption}
      bannerDetails={bannerDetails}
    />
  );
}
