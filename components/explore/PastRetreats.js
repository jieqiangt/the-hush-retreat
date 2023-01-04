import RetreatSummary from "../retreat/RetreatSummary";

export default function PastRetreats(props) {
  const retreats = [
    {
      title: "",
      content: "",
      galleryDetails: [{ src: "", alt: "", width: "", height: "" }],
    },
  ];

  const retreatItems = retreats.map((item, idx) => (
    <RetreatSummary
      key={idx}
      idx={idx}
      title={item.title}
      content={item.content}
      galleryDetails={item.galleryDetails}
      classes={props.classes}
      baseClass={props.baseClass}
    />
  ));

  return (
    <div className={props.classes[`${props.baseClass}`]}>{retreatItems}</div>
  );
}
