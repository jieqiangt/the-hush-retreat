import ResponsiveImage from "./ResponsiveImage";

export default function ImgComposition(props) {
  const { classes, baseClass, imgUrlList } = props;

  const images = imgUrlList.map((item, idx) => (
    <ResponsiveImage
      src={item.src}
      alt={item.alt}
      imgBoxClassName={`${classes[`${baseClass}--img--composition--imgbox`]} ${
        classes[`${baseClass}--img--composition--imgbox--${idx}`]
      }`}
      imgClassName={`${classes[`${baseClass}--img--composition--img`]}`}
    />
  ));

  return (
    <aside className={classes[`${baseClass}--img--composition`]}>
      {images}
    </aside>
  );
}
