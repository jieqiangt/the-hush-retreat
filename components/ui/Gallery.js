import GalleryItem from "./GalleryItem";

export default function Gallery(props) {
  const galleryItems = props.galleryDetails.map((item, idx) => (
    <GalleryItem
      key={idx}
      idx={idx}
      baseClass={props.baseClass}
      classes={props.classes}
      alt={item.alt}
      src={item.src}
      width={item.width}
      height={item.height}
    />
  ));

  return <div className={props.classes[`${props.baseClass}--gallery`]}>{galleryItems}</div>;
}
