import NavBar from "./NavBar";
import Footer from "./Footer";
import { Fragment, useContext, useEffect } from "react";
import NotificationContext from "../../store/notificationContext";
import NotificationModal from "../ui/NotificationModal";
import ModalContext from "../../store/modalContext";

export default function Layout(props) {
  const { baseClass, classes, modal, children } = props;
  const { notification: activeNotification, hideNotification } =
    useContext(NotificationContext);
  const { modalIsActive } = useContext(ModalContext);

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
    <Fragment>
      {modalIsActive ? modal : ""}
      {activeNotification && (
        <NotificationModal
          title={activeNotification.title}
          clientMessage={activeNotification.clientMessage}
          className={activeNotification.className}
          onClick={hideNotification}
        />
      )}

      <main className={modalIsActive ? "modal--open" : ""}>
        <NavBar />
        {children}
        <Footer
          footerClass={classes[`${baseClass}--footer`]}
          footerIconClass={classes[`${baseClass}--footer--icon`]}
          footerBtnClass={classes[`${baseClass}--footer--btn`]}
        />
      </main>
    </Fragment>
  );
}
