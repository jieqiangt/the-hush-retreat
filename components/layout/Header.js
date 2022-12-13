import NavBar from "./NavBar";

export default function Header(props) {
  return (
    <header
      className={props.headerClass ? `header ${props.headerClass}` : "header"}
    >
      <NavBar />
      <props.firstSection />
    </header>
  );
}
