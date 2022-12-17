import NavBar from "./NavBar";

export default function Header(props) {
  return (
    <header
      className={props.headerClass}
    >
      <NavBar />
      <h1 className={props.headerTitleClass}>{props.headerTitle}</h1>
      <props.firstSection />
    </header>
  );
}
