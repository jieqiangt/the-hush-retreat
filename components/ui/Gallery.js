import GalleryItem from "./GalleryItem";

export default function Gallery(props) {
  const { classes, baseClass, galleryDetails } = props;

  const galleryItems = galleryDetails.map((item, idx) => (
    <GalleryItem
      key={idx}
      idx={idx}
      baseClass={baseClass}
      classes={classes}
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
