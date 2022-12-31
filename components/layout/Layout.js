import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout(props) {
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
