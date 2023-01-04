import Image from "next/image";

export default function GalleryItem(props) {
  return (
    <figure
      className={
        props.classes[`${props.baseClass}--gallery--item--${props.idx}`]
      }
    >
      <Image
        alt={props.alt}
        src={props.src}
        width={props.width}
        height={props.height}
        className={props.classes[`${props.baseClass}--gallery--img`]}
      />
    </figure>
  );
}
