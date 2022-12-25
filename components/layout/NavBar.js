import NavLink from "./NavLink";
import Icon from "../ui/Icon";
import classes from "../../sass/layout/layout.module.scss";

export default function NavBar(props) {
  return (
    <nav className={`${classes["nav"]} ${props.navClass}`}>
      <ul className={classes["nav--list"]}>
        <div className={classes["nav--list--sides"]}>
          <NavLink href="/discover">Our Story</NavLink>
          <NavLink href="/new">Upcoming Retreats</NavLink>
        </div>
        <NavLink href="/">
          <Icon iconClass={classes["nav--icon"]} iconName="icon-logo-main" />
        </NavLink>
        <div className={classes["nav--list--sides"]}>
          <NavLink href="/explore">Past Retreats</NavLink>
          <NavLink href="/help">Help</NavLink>
        </div>
      </ul>
    </nav>
  );
}
