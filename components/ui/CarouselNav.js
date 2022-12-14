import { useState } from "react";
import { useEffect } from "react";
import CarouselBtn from "./CarouselBtn";


export default function CarouselNav(props) {

  const { numItems } = props;
  const [carouselDots, setCarouselDots] = useState([]);

  const carouselNavClass = props.carouselNavClass
    ? `carousel--nav ${props.carouselNavClass}`
    : "carousel--nav";

  const carouselDotClass = props.carouselDotClass
    ? `carousel--dot ${props.carouselDotClass}`
    : "carousel--dot";

  const createCarouselDots = (numItems) => {

    const collectorArr = [];
    for (let i = 0; i < numItems; i++) {
      let tempDot;
      tempDot = <CarouselBtn key={i} carouselBtnClass={carouselDotClass}>&nbsp;</CarouselBtn>
      if (i === 0) {
        tempDot = <CarouselBtn key={i} carouselBtnClass={carouselDotClass} active={true}>&nbsp;</CarouselBtn>
      }
      collectorArr.push(tempDot)
    }
    return collectorArr;
  }

  useEffect(() => {
    const createdDots = createCarouselDots(numItems)
    setCarouselDots(createdDots)
  }, [numItems])

  return (
    <div className={carouselNavClass}>
      {carouselDots}
    </div>
  );
}
