import GalleryItem from "./GalleryItem";

export default function Gallery(props) {
  const galleryItems = props.galleryDetails.map((item, idx) => (
    <GalleryItem
      key={idx}
      baseClass={props.baseClass}
      classes={props.classes}
      alt={item.alt}
      src={item.src}
      width={item.width}
      height={props.height}
    />
  ));

  return <div className={props.classes[`${props.baseClass}--gallery`]}></div>;
}
