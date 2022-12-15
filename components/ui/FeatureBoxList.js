
import FeatureBoxItem from "./FeatureBoxItem";

export default function FeatureBoxList(props) {
  return (
    <ul className="feature-box--list">
      {props["feature-box-items"].map((item) => (
        <FeatureBoxItem
          key={item.title}
          imgSrc={item.imgSrc}
          title={item.title}
          desc={item.desc}
        />
      ))}
    </ul>
  );
}
