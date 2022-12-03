import NavLink from "./NavLink";
import Logo from "../ui/Logo";
import classes from "./nav.module.scss";

export default function NavBar() {
  return (
    <nav >
      <ul className={`${classes["nav-list"]} container`}>
        <NavLink href="/discover">Our Story</NavLink>
        <NavLink href="/new">Upcoming Retreats</NavLink>
        <NavLink href="/">
          <Logo></Logo>
        </NavLink>
        <NavLink href="/explore">Past Retreats</NavLink>
        <NavLink href="/help">Contact Us</NavLink>
      </ul>
    </nav>
  );
}
