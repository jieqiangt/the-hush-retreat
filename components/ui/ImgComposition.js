import Image from "next/image";

export default function ImgComposition(props) {
  const scaleFactor = 3.5;
  return (
    <aside className={props.classes[`${props.baseClass}--img--composition`]}>
      <Image
        src={props.imgUrlList[0]}
        alt=""
        width={640 / scaleFactor}
        height={960 / scaleFactor}
        className={`${props.classes[`${props.baseClass}--img--composition--img`]} ${
          props.classes[`${props.baseClass}--img--composition--img--1`]
        }`}
      />
      <Image
        src={props.imgUrlList[1]}
        alt=""
        width={640 / scaleFactor}
        height={960 / scaleFactor}
        className={`${props.classes[`${props.baseClass}--img--composition--img`]} ${
          props.classes[`${props.baseClass}--img--composition--img--2`]
        }`}
      />
      <Image
        src={props.imgUrlList[2]}
        alt=""
        width={640 / scaleFactor}
        height={960 / scaleFactor}
        className={`${props.classes[`${props.baseClass}--img--composition--img`]} ${
          props.classes[`${props.baseClass}--img--composition--img--3`]
        }`}
      />
    </aside>
  );
}
