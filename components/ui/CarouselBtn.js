export default function CarouselBtn(props) {
  
  const carouselBtnClass = props.carouselBtnClass
    ? `carousel--btn ${props.carouselBtnClass}`
    : "carousel--btn";

  const activeItemClass = props.active ? "carousel--item--active" : "";
  
  return <button className={`${carouselBtnClass} ${activeItemClass}`}>{props.children}</button>;
}
