import Image from "next/image";

export default function FeatureBoxItem(props) {
  const {
    featureBoxItemClass,
    featureBoxItemDescClass,
    featureBoxItemImgClass,
    featureBoxItemImgBoxClass,
    featureBoxItemTitleClass,
    imgSrc,
    title,
    desc,
  } = props;

  return (
    <li key={title} className={featureBoxItemClass}>
      <div className={featureBoxItemImgBoxClass}>
        <Image
          className={featureBoxItemImgClass}
          src={imgSrc}
          alt={title}
          fill={true}
          sizes="(max-width: 46.875em) 100vw,
          28vw"
        />
      </div>
      <h3 className={featureBoxItemTitleClass}>{title}</h3>
      <p className={featureBoxItemDescClass}>{desc}</p>
    </li>
  );
}
