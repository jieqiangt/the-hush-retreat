import Banner from "../ui/Banner";

export default function ExploreBanner(props) {
  const title = "Our Previous Retreats TITLE";
  const caption = "Nisi occaecat nisi cillum pariatur culpa ex culpa ad culpa do velit non cillum.";
  const bannerDetails = "Cupidatat mollit consectetur excepteur aliquip.Magna non et in pariatur et nisi sit mollit non qui.";

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
