export default function Icon(props) {
  return (
    <svg idx={props.idx} className={props.iconClass}>
      <use idx={props.idx} href={`icons/sprite.svg#${props.iconName}`}></use>
    </svg>
  );
}
