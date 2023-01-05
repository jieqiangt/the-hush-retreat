import RetreatSummary from "../retreat/RetreatSummary";

export default function PastRetreats(props) {
  const retreats = [
    {
      title: "ALOA x HUSH Retreat",
      content:
        "Aliqua ex Lorem et sit sint id do ad velit velit excepteur sint. In excepteur qui amet ullamco elit nisi labore. In magna cupidatat ipsum aliqua exercitation cupidatat laboris ea anim veniam.",
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


