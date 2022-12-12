import NavLink from "./NavLink";
import Logo from "../ui/Logo";
import classes from "../../sass/layout/layout.module.scss";

export default function NavBar() {
  return (
    <nav className={classes["nav"]}>
      <ul className={classes["nav--list"]}>
        <div className={classes["nav--list--sides"]}>
          <NavLink href="/discover">Our Story</NavLink>
          <NavLink href="/new">Upcoming Retreats</NavLink>
        </div>
        <NavLink href="/">
          <Logo></Logo>
        </NavLink>
        <div className={classes["nav--list--sides"]}>
          <NavLink href="/explore">Past Retreats</NavLink>
          <NavLink href="/help">Contact Us</NavLink>
        </div>
      </ul>
    </nav>
  );
}
