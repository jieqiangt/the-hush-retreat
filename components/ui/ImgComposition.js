import Image from "next/image";

export default function ImgComposition(props) {
  const scaleFactor = 3.5;
  return (
    <aside className="composition">
      <Image
        src="/img/groot-1-sm.jpg"
        alt=""
        width={640 / scaleFactor}
        height={960 / scaleFactor}
        className="composition-img composition-img-1"
      />
      <Image
        src="/img/groot-2-sm.jpg"
        alt=""
        width={640 / scaleFactor}
        height={960 / scaleFactor}
        className="composition-img composition-img-2"
      />
      <Image
        src="/img/groot-3-sm.jpg"
        alt=""
        width={640 / scaleFactor}
        height={960 / scaleFactor}
        className="composition-img composition-img-3"
      />
    </aside>
  );
}
