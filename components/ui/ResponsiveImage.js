import Image from "next/image";

function ResponsiveImage(props) {
  const { imgBoxClassName, imgClassName, alt, src, width, height, sizes } =
    props;

  const image = sizes ? (
    <Image
      src={src}
      alt={alt}
      fill={true}
      className={`${imgClassName} hidden`}
      sizes={sizes}
    />
  ) : (
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
  return <figure className={`${imgBoxClassName} hidden`}>{image}</figure>;
}

export default ResponsiveImage;
