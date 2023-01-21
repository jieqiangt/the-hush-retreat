import Image from "next/image";

export default function FeatureBoxItem(props) {
  const scaleFactor = 12.5;
  const {
    featureBoxItemClass,
    featureBoxItemDescClass,
    featureBoxItemImgClass,
    featureBoxItemOuterClass,
    featureBoxItemTitleClass,
    imgSrc,
    title,
    desc,
  } = props;

  return (
    <li key={title} className={featureBoxItemOuterClass}>
      <div className={featureBoxItemClass}>
        <Image
          className={featureBoxItemImgClass}
          src={imgSrc}
          alt={title}
          width={6000 / scaleFactor}
          height={4000 / scaleFactor}
        />
        <h3 className={featureBoxItemTitleClass}>{title}</h3>
        <p className={featureBoxItemDescClass}>{desc}</p>
      </div>
    </li>
  );
}
