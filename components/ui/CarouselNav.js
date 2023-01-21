import { useState } from "react";
import { useEffect } from "react";
import CarouselDot from "./CarouselDot";

export default function CarouselNav(props) {
  const { numItems, activeItem } = props;
  const [carouselDots, setCarouselDots] = useState([]);
  const {
    carouselNavDotActiveClass,
    carouselNavDotClass,
    carouselNavClass,
    changeActiveItem,
  } = props;

  useEffect(() => {
    const changeActiveItemHandler = (event) => {
      event.preventDefault();
      const newActiveItem = parseInt(event.target.getAttribute("dot-id"));
      changeActiveItem(newActiveItem);
    };

    const createCarouselDots = (numItems) => {
      const collectorArr = [];
      for (let i = 0; i < numItems; i++) {
        let tempDot;
        tempDot = (
          <CarouselDot
            key={i}
            dotId={i}
            carouselNavDotClass={carouselNavDotClass}
            onClick={changeActiveItemHandler}
          >
            &nbsp;
          </CarouselDot>
        );
        if (i === activeItem) {
          tempDot = (
            <CarouselDot
              key={i}
              dotId={i}
              carouselNavDotClass={carouselNavDotClass}
              carouselNavDotActiveClass={carouselNavDotActiveClass}
              onClick={changeActiveItemHandler}
            >
              &nbsp;
            </CarouselDot>
          );
        }
        collectorArr.push(tempDot);
      }
      return collectorArr;
    };

    const createdDots = createCarouselDots(numItems, activeItem);
    setCarouselDots(createdDots);
  }, [
    numItems,
    activeItem,
    carouselNavDotActiveClass,
    carouselNavDotClass,
    changeActiveItem,
  ]);

  return <div className={carouselNavClass}>{carouselDots}</div>;
}
