import Icon from "./Icon";

function NotificationModal(props) {
  const { className, onClick, title, clientMessage } = props;

  return (
    <div className={className} onClick={onClick}>
      <Icon iconClass={`${className}--close`} iconName="icon-cross"></Icon>
      <h2>{title}</h2>
      <p>{clientMessage}</p>
    </div>
  );
}

export default NotificationModal;
