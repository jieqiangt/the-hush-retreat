import NavBar from "./NavBar";
import Footer from "./Footer";
import { useContext, useEffect } from "react";
import NotificationContext from "../../store/notificationContext";
import NotificationModal from "../ui/NotificationModal";

NotificationModal
export default function Layout(props) {
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
      {props.modal ? props.modal : ""}
      {activeNotification && (
        <NotificationModal
          title={activeNotification.title}
          clientMessage={activeNotification.clientMessage}
          className={activeNotification.className}
          onClick={hideNotification}
        />
      )}
      <div className={props.classes[props.baseClass]}>
        <NavBar navClass={props.classes[`${props.baseClass}--nav`]} />
        {props.children}
        <Footer
          footerClass={props.classes[`${props.baseClass}--footer`]}
          footerIconClass={props.classes[`${props.baseClass}--footer--icon`]}
        />
      </div>
    </main>
  );
}
