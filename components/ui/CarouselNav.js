import CarouselBtn from "./CarouselBtn";

export default function CarouselNav(props) {
    
  const carouselNavClass = props.carouselNavClass
    ? `carousel--nav ${props.carouselNavClass}`
    : "carousel--nav";

  const carouselDotClass = props.carouselDotClass
    ? `carousel--dot ${props.carouselDotClass}`
    : "carousel--dot";

  return (
    <div className={carouselNavClass}>
      <CarouselBtn carouselBtnClass={carouselDotClass}>&nbsp;</CarouselBtn>
    </div>
  );
}
