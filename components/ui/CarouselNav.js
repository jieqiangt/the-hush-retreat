import { useState } from "react";
import { useEffect } from "react";
import CarouselDot from "./CarouselDot";


export default function CarouselNav(props) {

  const { numItems, activeItem } = props;
  const [carouselDots, setCarouselDots] = useState([]);

  const carouselNavClass = props.carouselNavClass
    ? `carousel--nav ${props.carouselNavClass}`
    : "carousel--nav";

  const carouselDotClass = props.carouselDotClass
    ? `carousel--dot ${props.carouselDotClass}`
    : "carousel--dot";

  const changeActiveItemHandler = (event) => {

    event.preventDefault()
    const newActiveItem = parseInt(event.target.getAttribute('dot-id'))
    props.changeActiveItem(newActiveItem)
  }


  useEffect(() => {

    const createCarouselDots = (numItems) => {

      const collectorArr = [];
      for (let i = 0; i < numItems; i++) {
        let tempDot;
        tempDot = <CarouselDot key={i} dotId={i} carouselBtnClass={carouselDotClass} onClick={changeActiveItemHandler}>&nbsp;</CarouselDot>
        if (i === activeItem) {
          tempDot = <CarouselDot key={i} dotId={i} carouselBtnClass={carouselDotClass} onClick={changeActiveItemHandler} active={true}>&nbsp;</CarouselDot>
        }
        collectorArr.push(tempDot)
      }
      return collectorArr;
    }

    const createdDots = createCarouselDots(numItems, activeItem)
    setCarouselDots(createdDots)

  }, [numItems, activeItem])


  return (
    <div className={carouselNavClass}>
      {carouselDots}
    </div>
  );
}
