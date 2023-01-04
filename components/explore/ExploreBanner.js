import Banner from "../ui/Banner";

export default function ExploreBanner(props) {
  const title = "Our Previous Retreats";
  const caption = "SOME CAPTION";
  const bannerDetails = "SOME DETAILS";

  return (
    <Banner
      classes={props.classes}
      baseClass={props.baseClass}
      title={title}
      caption={caption}
      bannerDetails={bannerDetails}
    />
  );
}
