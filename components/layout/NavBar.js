import NavLink from "./NavLink";
import Icon from "../ui/Icon";
import classes from "../../sass/layout/layout.module.scss";
import { useRouter } from "next/router";

export default function NavBar(props) {
  const router = useRouter();
  const curPath = router.pathname;

  return (
    <nav className={`${classes["nav"]} ${props.navClass}`}>
      <ul className={classes["nav--list"]}>
        <div className={classes["nav--list--sides"]}>
          <NavLink activeNav={curPath} id="/discover" href="/discover">
            Our Story
          </NavLink>
          <NavLink activeNav={curPath} id="/upcoming" href="/upcoming">
            Upcoming Retreats
          </NavLink>
        </div>
        <NavLink href="/">
          <Icon iconClass={classes["nav--icon"]} iconName="icon-logo-main" />
        </NavLink>
        <div className={classes["nav--list--sides"]}>
          <NavLink activeNav={curPath} id="/explore" href="/explore">
            Past Retreats
          </NavLink>
          <NavLink activeNav={curPath} id="/help" href="/help">
            Help
          </NavLink>
        </div>
      </ul>
    </nav>
  );
}
