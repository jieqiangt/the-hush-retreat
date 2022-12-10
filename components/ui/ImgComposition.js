import Image from "next/image";
import { Fragment } from "react";

export default function ImgComposition(props) {
  const scaleFactor = 3.5;
  return (
    <Fragment>
      <Image
        src="/groot-1-sm.jpg"
        alt=""
        width={640 / scaleFactor}
        height={960 / scaleFactor}
        className="composition-img composition-img-1"
      />
      <Image
        src="/groot-2-sm.jpg"
        alt=""
        width={640 / scaleFactor}
        height={960 / scaleFactor}
        className="composition-img composition-img-2"
      />
      <Image
        src="/groot-3-sm.jpg"
        alt=""
        width={640 / scaleFactor}
        height={960 / scaleFactor}
        className="composition-img composition-img-3"
      />
    </Fragment>
  );
}
