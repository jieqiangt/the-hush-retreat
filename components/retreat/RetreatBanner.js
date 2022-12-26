import Banner from "../ui/Banner";
import RetreatBannerDetails from "./RetreatBannerDetails";

export default function RetreatBanner(props) {
  const bannerDetails = (
    <RetreatBannerDetails
      date={props.date}
      time={props.time}
      price={props.price}
      location={props.location}
      promotion={props.promotion}
      btnText={props.btnText}
      baseClass={props.baseClass}
      classes={props.classes}
    />
  );

  return (
      <Banner
        classes={props.classes}
        baseClass={props.baseClass}
        title={props.title}
        caption={props.caption}
        bannerDetails={bannerDetails}
      />
  );
}


