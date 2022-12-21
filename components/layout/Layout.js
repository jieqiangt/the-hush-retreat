import { Fragment } from "react";
import Header from "./Header";
import NavBar from "./NavBar";

export default function Layout(props) {
  return (
    <Fragment>
      {/* <Header
        firstSection={props.firstSection}
        headerClass={props.headerClass}
        headerTitleClass={props.headerTitleClass}
        headerTitle={props.headerTitle}
      ></Header> */}
      <NavBar />
      <main>{props.children}</main>
    </Fragment>
  );
}
