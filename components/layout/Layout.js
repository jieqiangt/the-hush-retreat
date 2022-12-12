import { Fragment } from "react";
import Header from "./Header";

export default function Layout(props) {
  return (
    <Fragment>
      <Header firstSection={props.firstSection}></Header>
      <main>{props.children}</main>
    </Fragment>
  );
}
