import NavBar from "./NavBar";
import Footer from "./Footer";
import { useContext, useEffect } from "react";
import NotificationContext from "../../store/notificationContext";
import NotificationModal from "../ui/NotificationModal";

export default function Layout(props) {
  const { baseClass, classes, modal, children } = props;
  const { notification: activeNotification, hideNotification } =
    useContext(NotificationContext);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, []);

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  });

  return (
    <main>
      {modal ? modal : ""}
      {activeNotification && (
        <NotificationModal
          title={activeNotification.title}
          clientMessage={activeNotification.clientMessage}
          className={activeNotification.className}
          onClick={hideNotification}
        />
      )}
      <div className={classes[baseClass]}>
        <NavBar navClass={classes[`${baseClass}--nav`]}/>
        {children}
        <Footer
          footerClass={classes[`${baseClass}--footer`]}
          footerIconClass={classes[`${baseClass}--footer--icon`]}
        />
      </div>
    </main>
  );
}
