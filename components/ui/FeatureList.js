import FeatureItem from "./FeatureItem";

export default function FeatureList(props) {
  return (
    <div className="feature-list">
      {props.features.map((item) => (
        <FeatureItem imgSrc={item.imgSrc} title={item.title} desc={item.desc} />
      ))}
    </div>
  );
}
