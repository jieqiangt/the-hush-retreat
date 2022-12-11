import Image from "next/image";

export default function FeatureItem(props) {
  return (
    <div className="feature-item">
      {/* <Image className=".feature-item--img" src="#" width={100} height={100}/> */}
      <div>MY IMAGE</div>
      <h3 className="feature-item--title">{props.title}</h3>
      <p className="feature-item--desc">{props.desc}</p>
    </div>
  );
}
