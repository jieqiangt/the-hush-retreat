import NavBar from "./NavBar";
import Footer from "./Footer";
import { useEffect } from "react";

export default function Layout(props) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },[]);

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  });
  return (
    <main>
      {props.modal ? props.modal : ""}
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
