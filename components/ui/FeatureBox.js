import FeatureBoxItem from "./FeatureBoxItem";

export default function FeatureBox(props) {
  const {
    featureBoxListClass,
    featureBoxItemClass,
    featureBoxItemOuterClass,
    featureBoxItemImgClass,
    featureBoxItemTitleClass,
    featureBoxItemDescClass,
  } = props;

  return (
    <ul className={featureBoxListClass}>
      {props["feature-box-items"].map((item) => (
        <FeatureBoxItem
          key={item.title}
          imgSrc={item.imgSrc}
          title={item.title}
          desc={item.desc}
          featureBoxItemClass={featureBoxItemClass}
          featureBoxItemOuterClass={featureBoxItemOuterClass}
          featureBoxItemImgClass={featureBoxItemImgClass}
          featureBoxItemTitleClass={featureBoxItemTitleClass}
          featureBoxItemDescClass={featureBoxItemDescClass}
        />
      ))}
    </ul>
  );
}
