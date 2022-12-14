import CarouselBtn from "./CarouselBtn";
import CarouselNav from "./CarouselNav";

export default function Carousel(props) {
  const carouselClass = props.carouselClass
    ? `carousel ${props.carouselClass}`
    : "carousel";

  const carouselListClass = props.carouselListClass
    ? `carousel--list ${props.carouselListClass}`
    : "carousel--list";


  const numItems = props.carouselItems.length

  return (
    <div className={carouselClass}>
      <div className={carouselListClass}>
        {props.carouselItems}
        <CarouselBtn carouselBtnClass="carousel--btn--left" slide-direction="left" activeItem={props.activeItem}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </CarouselBtn>
        <CarouselBtn carouselBtnClass="carousel--btn--right" slide-direction="right" activeItem={props.activeItem}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </CarouselBtn>
      </div>
      <CarouselNav
        carouselBtnClass={props.carouselBtnClass}
        carouselDotClass={props.carouselDotClass}
        numItems={numItems}
        activeItem={props.activeItem}
      />
    </div>
  );
}
