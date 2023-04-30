import PastRetreatSummary from "./PastRetreatSummary";

export default function PastRetreats(props) {
  const { baseClass, classes, retreats } = props;

  const retreatItems = retreats.map((item, idx) => (
    <PastRetreatSummary
      key={idx}
      idx={idx}
      title={item.title}
      content={item.content}
      galleryDetails={item.galleryDetails}
      classes={classes}
      baseClass={baseClass}
      urlPath={item.urlPath}
    />
  ));

  return <div className={classes[`${baseClass}`]}>{retreatItems}</div>;
}
