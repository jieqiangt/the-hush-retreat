export default function CarouselBtn(props) {
  return (
    <button
      className={props.carouselBtnClass}
      onClick={props.onClick}
      slide-direction={props["slide-direction"]}
    >
      {props.children}
    </button>
  );
}
