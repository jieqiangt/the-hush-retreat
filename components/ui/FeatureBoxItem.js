import ResponsiveImage from "./ResposiveImage";

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
      <ResponsiveImage
        imgBoxClassName={featureBoxItemImgBoxClass}
        imgClassName={featureBoxItemImgClass}
        src={imgSrc}
        alt={title}
        sizes="(max-width: 46.875em) 100vw,
          28vw"
      />
      <h3 className={featureBoxItemTitleClass}>{title}</h3>
      <p className={featureBoxItemDescClass}>{desc}</p>
    </li>
  );
}
