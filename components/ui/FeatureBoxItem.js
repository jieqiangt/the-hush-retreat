import Image from "next/image";

export default function FeatureBoxItem(props) {
  const scaleFactor = 12.5;

  return (
    <li key={props.title} className={props.featureBoxItemOuterClass}>
      <div className={props.featureBoxItemClass}>
        <Image
          className={props.featureBoxItemImgClass}
          src={props.imgSrc}
          alt={props.title}
          width={6000 / scaleFactor}
          height={4000 / scaleFactor}
        />
        <h3 className={props.featureBoxItemTitleClass}>{props.title}</h3>
        <p className={props.featureBoxItemDescClass}>{props.desc}</p>
      </div>
    </li>
  );
}

;
