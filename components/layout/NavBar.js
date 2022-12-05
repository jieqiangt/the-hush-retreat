import NavLink from "./NavLink";
import Logo from "../ui/Logo";
import classes from "./sass/layout.module.scss";
import { Fragment } from "react";

export default function NavBar() {
  return (
    <nav className={classes["nav"]}>
      <ul className={classes["nav--list"]}>
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
