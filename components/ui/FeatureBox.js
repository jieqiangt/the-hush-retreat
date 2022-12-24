import FeatureBoxItem from "./FeatureBoxItem";

export default function FeatureBox(props) {
  return (
    <ul className={props.featureBoxListClass}>
      {props["feature-box-items"].map((item) => (
        <FeatureBoxItem
          key={item.title}
          imgSrc={item.imgSrc}
          title={item.title}
          desc={item.desc}
          featureBoxItemClass={props.featureBoxItemClass}
          featureBoxItemOuterClass={props.featureBoxItemOuterClass}
          featureBoxItemImgClass={props.featureBoxItemImgClass}
          featureBoxItemTitleClass={props.featureBoxItemTitleClass}
          featureBoxItemDescClass={props.featureBoxItemDescClass}
        />
      ))}
    </ul>
  );
}
