export default function CarouselDot(props) {
  const {
    carouselNavDotActiveClass,
    dotId,
    carouselNavDotClass,
    onClick,
    children,
  } = props;

  const activeDotClass = carouselNavDotActiveClass
    ? carouselNavDotActiveClass
    : "";

  return (
    <button
      dot-id={dotId}
      className={`${carouselNavDotClass} ${activeDotClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
