import Banner from "../ui/Banner";

export default function UpcomingBanner(props) {
  const { baseClass, classes } = props;
  const title = "Our Upcoming Retreats";
  const caption = "Start your wellness journey with us today";
  const bannerDetails = (
    <div className={classes[`${baseClass}--details`]}>Find a retreat that suits your needs below</div>
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
