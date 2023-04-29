import ResponsiveImage from "./ResponsiveImage";

export default function ImgComposition(props) {
  const { classes, baseClass, imgUrlList } = props;

  const images = imgUrlList.map((item, idx) => (
    <ResponsiveImage
      key={item.src}
      src={item.src}
      alt={item.alt}
      imgBoxClassName={`${classes[`${baseClass}--img--composition--imgbox`]} ${
        classes[`${baseClass}--img--composition--imgbox--${idx}`]
      }`}
      imgClassName={`${classes[`${baseClass}--img--composition--img`]}`}
      sizes="(max-width: 46.875em) 40vw,
      30vw"
    />
  ));

  return (
    <aside className={classes[`${baseClass}--img--composition`]}>
      {images}
    </aside>
  );
}
