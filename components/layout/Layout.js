import { Fragment } from "react";
import Header from "./Header";

export default function Layout(props) {
  return (
    <Fragment>
      <Header firstSection={props.firstSection} headerClass={props.headerClass}></Header>
      <main>{props.children}</main>
    </Fragment>
  );
}
