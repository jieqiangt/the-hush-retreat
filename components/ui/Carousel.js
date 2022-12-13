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
      </div>
      <CarouselBtn carouselBtnClass={props.carouselBtnClass} slide-direction="prev">
        &nbsp;
      </CarouselBtn>
      <CarouselBtn carouselBtnClass={props.carouselBtnClass} slide-direction="next">
        &nbsp;
      </CarouselBtn>
      <CarouselNav
        carouselBtnClass={props.carouselBtnClass}
        carouselDotClass={props.carouselDotClass}
        numItems={numItems}
      />
    </div>
  );
}
