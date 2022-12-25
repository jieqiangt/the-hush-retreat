import { Fragment } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout(props) {
  return (
    <main>
      <div className={props.pageClass}>
        <NavBar navClass={props.navClass} />
        {props.children}
        <Footer
          footerClass={props.footerClass}
          footerIconClass={props.footerIconClass}
        />
      </div>
    </main>
  );
}
