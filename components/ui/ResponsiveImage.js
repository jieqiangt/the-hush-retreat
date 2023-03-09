import Image from "next/image";

function ResponsiveImage(props) {
  const { imgBoxClassName, imgClassName, alt, src, sizes } = props;

  return (
    <div className={`${imgBoxClassName} hidden`}>
      <Image
        src={src}
        alt={alt}
        fill={true}
        className={`${imgClassName} hidden`}
        sizes={sizes}
      />
    </div>
  );
}

export default ResponsiveImage;
