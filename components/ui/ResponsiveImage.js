import Image from "next/image";

function ResponsiveImage(props) {
  const {
    imgBoxClassName,
    imgClassName,
    alt,
    src,
    width,
    height,
    sizes,
    galleryFlag,
  } = props;

  let image;

  if (sizes) {
    image = (
      <Image
        src={src}
        alt={alt}
        fill={true}
        className={`${imgClassName} hidden`}
        sizes={sizes}
      />
    );
  }

  if (!sizes & !galleryFlag) {
    image = (
      <picture>
        <img
          alt={alt}
          src={src}
          width={width}
          height={height}
          className={`${imgClassName} hidden`}
        />
      </picture>
    );
  }

  if (galleryFlag) {
    image = (
      <Image
        src={src}
        alt={alt}
        className={`${imgClassName} hidden`}
        width={width}
        height={height}
      />
    );
  }

  return <figure className={`${imgBoxClassName} hidden`}>{image}</figure>;
}

export default ResponsiveImage;
