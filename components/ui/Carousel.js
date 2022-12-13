import CarouselBtn from "./CarouselBtn";
import CarouselNav from "./CarouselNav";

export default function Carousel(props) {
  const carouselClass = props.carouselClass
    ? `carousel ${props.carouselClass}`
    : "carousel";

  return (
    <div className={carouselClass}>
      {props.carouselItems}
      <CarouselBtn carouselBtnClass={props.carouselBtnClass}>
        &nbsp;
      </CarouselBtn>
      <CarouselBtn carouselBtnClass={props.carouselBtnClass}>
        &nbsp;
      </CarouselBtn>
      <CarouselNav
        carouselBtnClass={props.carouselBtnClass}
        carouselDotClass={props.carouselDotClass}
      />
    </div>
  );
}
