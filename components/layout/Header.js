import NavBar from "./NavBar";

export default function Layout(props) {
  return (
      <header className="header">
        <NavBar />
        <props.firstSection />
      </header>
  );
}
