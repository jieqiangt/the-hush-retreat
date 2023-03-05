import FeatureBoxItem from "./FeatureBoxItem";

export default function FeatureBox(props) {
  const {
    featureBoxListClass,
    featureBoxItemClass,
    featureBoxItemImgBoxClass,
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
          featureBoxItemImgBoxClass={featureBoxItemImgBoxClass}
          featureBoxItemImgClass={featureBoxItemImgClass}
          featureBoxItemTitleClass={featureBoxItemTitleClass}
          featureBoxItemDescClass={featureBoxItemDescClass}
        />
      ))}
    </ul>
  );
}
