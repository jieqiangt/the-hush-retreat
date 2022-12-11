import { Fragment } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Layout(props) {
  return (
    <Fragment>
      <header className="header">
        <NavBar />
        <props.firstSection />
      </header>
      <main>{props.children}</main>
    </Fragment>
  );
}
