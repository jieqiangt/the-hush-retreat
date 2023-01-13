function NotificationModal(props) {
    return (
      <div className={props.className} onClick={props.onClick}>
        <h2>{props.title}</h2>
        <p>{props.clientMessage}</p>
      </div>
    );
  }
  
  export default NotificationModal;
  