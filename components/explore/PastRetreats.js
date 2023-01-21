import RetreatSummary from "../retreat/RetreatSummary";

export default function PastRetreats(props) {
  const { baseClass, classes, retreats } = props;

  const retreatItems = retreats.map((item, idx) => (
    <RetreatSummary
      key={idx}
      idx={idx}
      title={item.title}
      content={item.content}
      galleryDetails={item.galleryDetails}
      classes={classes}
      baseClass={baseClass}
    />
  ));

  return <div className={classes[`${baseClass}`]}>{retreatItems}</div>;
}
