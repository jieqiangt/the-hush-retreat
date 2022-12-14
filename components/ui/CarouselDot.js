export default function CarouselDot(props) {
  
    const carouselDotClass = props.carouselDotClass
      ? `carousel--dot ${props.carouselDotClass}`
      : "carousel--dot";
  
    const activeDotClass = props.active ? "carousel--dot--active" : "";
    
    return <button dot-id={props.dotId} className={`${carouselDotClass} ${activeDotClass}`} onClick={props.onClick}>{props.children}</button>;
  }
  