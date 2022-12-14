export default function CarouselDot(props) {
  
    const carouselDotClass = props.carouselDotClass
      ? `carousel--dot ${props.carouselDotClass}`
      : "carousel--dot";
  
    const activeDotClass = props.active ? "carousel--dot--active" : "";
    
    return <button className={`${carouselDotClass} ${activeDotClass}`}>{props.children}</button>;
  }
  