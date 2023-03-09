import Banner from "../ui/Banner";

export default function UpcomingBanner(props) {
  const { baseClass, classes } = props;
  const title = "BANNER TITLE";
  const caption = "BANNER CAPTION";
  const bannerDetails = (
    <div className={classes[`${baseClass}--details`]}>BANNER DETAILS</div>
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
