import Image from "next/image";

export default function GalleryItem(props) {
  const { classes, baseClass, idx, alt, src, width, height } = props;

  return (
    <figure className={classes[`${baseClass}--gallery--item--${idx}`]}>
      <Image
        alt={alt}
        src={src}
        width={width}
        height={height}
        className={classes[`${baseClass}--gallery--img`]}
      />
    </figure>
  );
}
