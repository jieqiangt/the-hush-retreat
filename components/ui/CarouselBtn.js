export default function CarouselBtn(props) {

  const carouselBtnClass = props.carouselBtnClass
    ? `carousel--btn ${props.carouselBtnClass}`
    : "carousel--btn";

  return <button className={`${carouselBtnClass}`} onClick={props.onClick}>{props.children}</button>;
}
