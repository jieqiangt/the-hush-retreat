import RetreatBanner from "../retreat/RetreatBanner";

export default function NewRetreatBanner(props) {
  const title = "Release & Renew";
  const caption = "Inner Alchemy: Releasing 2022, Birthing 2023";
  const date = "7 January 2023, Saturday";
  const time = "9am &#8211; 5pm";
  const price = "$399 per pax";
  const location = "Villa Samadhi & Labrador Nature Reserve";
  const promotion = "Sign up by 26 December for 10% off";
  const btnText = "Register Now";
  const btnHref = "/new";

  return (
    <RetreatBanner
      classes={props.classes}
      baseClass={props.baseClass}
      title={title}
      caption={caption}
      date={date}
      time={time}
      price={price}
      location={location}
      promotion={promotion}
      btnText={btnText}
      btnHref={btnHref}
    />
  );
}
