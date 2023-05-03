import ResponsiveImage from "./ResponsiveImage";

export default function Gallery(props) {
  const { classes, baseClass, galleryDetails } = props;

  const galleryItems = galleryDetails.map((item, idx) => (
    <ResponsiveImage
      key={idx}
      imgBoxClassName={classes[`${baseClass}--gallery--item--${idx}`]}
      imgClassName={classes[`${baseClass}--gallery--img`]}
      alt={item.alt}
      src={item.src}
      width={item.width}
      height={item.height}
    />
  ));

  return (
    <div className={`${classes[`${baseClass}--gallery`]} hidden`}>
      {galleryItems}
    </div>
  );
}
