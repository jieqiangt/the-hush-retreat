import Icon from "./Icon";

function NotificationModal(props) {
  return (
    <div className={props.className} onClick={props.onClick}>
      <Icon
        iconClass={`${props.className}--close`}
        iconName="icon-cross"
      ></Icon>
      <h2>{props.title}</h2>
      <p>{props.clientMessage}</p>
    </div>
  );
}

export default NotificationModal;
