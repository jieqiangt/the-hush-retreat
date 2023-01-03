import { createContext, useState, useEffect } from "react";
import { notificationTime } from "../lib/constants";


const contextStructure = {
  notification: null, //object with title, message, status
  showNotification: function (notificationData) {},
  hideNotification: function () {},
};

const NotificationContext = createContext(contextStructure);

export function NotifcationContextProvider(props) {
  const [activeNotification, setActiveNotification] = useState();

  useEffect(() => {
    if (activeNotification) {
      const timerId = setTimeout(() => {
        setActiveNotification(null);
      }, notificationTime);
      return () => {
        clearTimeout(timerId);
      };
    }
  }, [activeNotification]);

  function showNotificationHandler(notificationData) {
    setActiveNotification(notificationData);
  }

  function hideNotificationHandler() {
    setActiveNotification(null);
  }

  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };

  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;
