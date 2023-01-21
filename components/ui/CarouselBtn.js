export default function CarouselBtn(props) {
  const { carouselBtnClass, onClick, children } = props;
  return (
    <button
      className={carouselBtnClass}
      onClick={onClick}
      slide-direction={props["slide-direction"]}
    >
      {children}
    </button>
  );
}
