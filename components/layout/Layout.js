import { Fragment } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";


export default function Layout(props) {
  return (
    <Fragment>
      <NavBar />
      <main>{props.children}</main>
      <Footer footerClass={props.footerClass}/>
    </Fragment>
  );
}
