export default function CarouselBtn(props) {
  const carouselBtnClass = props.carouselBtnClass
    ? `carousel--btn ${props.carouselBtnClass}`
    : "carousel--btn";

  return <button className={carouselBtnClass}>{props.children}</button>;
}
