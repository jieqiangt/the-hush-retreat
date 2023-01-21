import CarouselBtn from "./CarouselBtn";
import CarouselNav from "./CarouselNav";

export default function Carousel(props) {
  const {
    carouselItems,
    changeActiveItem,
    carouselClass,
    carouselListClass,
    carouselBtnLeftClass,
    activeItem,
    carouselBtnRightClass,
    carouselNavClass,
    carouselNavDotActiveClass,
    carouselNavDotClass,
  } = props;

  const numItems = carouselItems.length;

  const changeActiveItemHandler = (event) => {
    event.preventDefault();
    const slideDirection = event.target.getAttribute("slide-direction");
    let direction = 1;

    if (slideDirection === "left") {
      direction = -1;
    }

    const newActiveItem =
      (activeItem + 1 * direction) % numItems >= 0
        ? (activeItem + 1 * direction) % numItems
        : numItems - 1;

    changeActiveItem(newActiveItem);
  };

  return (
    <div className={`${carouselClass} hidden`}>
      <div className={carouselListClass}>
        {carouselItems}
        <CarouselBtn
          carouselBtnClass={carouselBtnLeftClass}
          slide-direction="left"
          activeItem={activeItem}
          onClick={changeActiveItemHandler}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            slide-direction="left"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              slide-direction="left"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </CarouselBtn>
        <CarouselBtn
          carouselBtnClass={carouselBtnRightClass}
          slide-direction="right"
          activeItem={activeItem}
          onClick={changeActiveItemHandler}
        >
          <svg
            slide-direction="right"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              slide-direction="right"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </CarouselBtn>
      </div>
      <CarouselNav
        carouselNavClass={carouselNavClass}
        carouselNavDotClass={carouselNavDotClass}
        carouselNavDotActiveClass={carouselNavDotActiveClass}
        numItems={numItems}
        activeItem={activeItem}
        changeActiveItem={changeActiveItem}
      />
    </div>
  );
}
