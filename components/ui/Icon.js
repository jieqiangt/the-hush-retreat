export default function Icon(props) {
  const { iconClass, idx, iconName } = props;

  return (
    <svg idx={idx} className={iconClass}>
      <use idx={idx} href={`/icons/sprite.svg#${iconName}`}></use>
    </svg>
  );
}
