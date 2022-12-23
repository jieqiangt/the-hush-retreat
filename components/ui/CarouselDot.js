export default function CarouselDot(props) {
  const activeDotClass = props.carouselNavDotActiveClass
    ? props.carouselNavDotActiveClass
    : "";
    
  return (
    <button
      dot-id={props.dotId}
      className={`${props.carouselNavDotClass} ${activeDotClass}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
