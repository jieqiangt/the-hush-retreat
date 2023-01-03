import Icon from "./Icon";
import LinkButton from "./LinkButton";

export default function Modal(props) {
  return (
    <div
      className={props.classes[`${props.baseClass}--modal`]}
    >
      <div className={props.classes[`${props.baseClass}--modal--box`]}>
        <LinkButton
          className={props.classes[`${props.baseClass}--modal--close`]}
        >
          <Icon
            iconClass={props.classes[`${props.baseClass}--modal--icon`]}
            iconName="icon-cross"
          ></Icon>
        </LinkButton>
        {props.img}
        {props.aside}
      </div>
    </div>
  );
}
