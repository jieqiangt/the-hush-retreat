import Image from "next/image";

export default function ImgComposition(props) {
  const { classes, baseClass, imgUrlList } = props;

  const scaleFactor = 3.5;
  return (
    <aside className={classes[`${baseClass}--img--composition`]}>
      <Image
        src={imgUrlList[0]}
        alt=""
        width={640 / scaleFactor}
        height={960 / scaleFactor}
        className={`${classes[`${baseClass}--img--composition--img`]} ${
          classes[`${baseClass}--img--composition--img--1`]
        } hidden`}
      />
      <Image
        src={imgUrlList[1]}
        alt=""
        width={640 / scaleFactor}
        height={960 / scaleFactor}
        className={`${classes[`${baseClass}--img--composition--img`]} ${
          classes[`${baseClass}--img--composition--img--2`]
        } hidden`}
      />
      <Image
        src={imgUrlList[2]}
        alt=""
        width={640 / scaleFactor}
        height={960 / scaleFactor}
        className={`${classes[`${baseClass}--img--composition--img`]} ${
          classes[`${baseClass}--img--composition--img--3`]
        } hidden`}
      />
    </aside>
  );
}
