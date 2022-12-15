import NavBar from "./NavBar";
import classes from "../../sass/pages/discover.module.scss";

export default function Header(props) {
  return (
    <header
      className={props.headerClass ? `header ${props.headerClass}` : "header"}
    >
      <NavBar />
      <h1 className={props.headerTitleClass}>{props.headerTitle}</h1>
      <props.firstSection />
    </header>
  );
}
