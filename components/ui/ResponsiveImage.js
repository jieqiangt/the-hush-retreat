import Image from "next/image";

function ResponsiveImage(props) {
  const { imgBoxClassName, imgClassName, alt, src, sizes } = props;

  return (
    <figure className={`${imgBoxClassName} hidden`}>
      <Image
        src={src}
        alt={alt}
        fill={true}
        className={`${imgClassName} hidden`}
        sizes={sizes}
      />
    </figure>
  );
}

export default ResponsiveImage;
