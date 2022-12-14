import { useState } from "react";
import { useEffect } from "react";
import CarouselDot from "./CarouselDot";


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
      tempDot = <CarouselDot key={i} carouselBtnClass={carouselDotClass}>&nbsp;</CarouselDot>
      if (i === props.activeItem) {
        tempDot = <CarouselDot key={i} carouselBtnClass={carouselDotClass} active={true}>&nbsp;</CarouselDot>
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
