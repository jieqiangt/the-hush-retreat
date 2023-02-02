import NavLink from "./NavLink";
import Icon from "../ui/Icon";
import classes from "../../sass/layout/layout.module.scss";
import { useRouter } from "next/router";

export default function NavBar(props) {
  const { navClass } = props;
  const router = useRouter();
  const curPath = router.pathname;

  return (
    <nav className={`${classes["nav"]} ${navClass}`}>
      <ul className={classes["nav--list"]}>
        <NavLink
          activeNav={curPath}
          id="/discover"
          href="/discover"
          classes={classes}
        >
          Our Story
        </NavLink>
        <NavLink
          activeNav={curPath}
          id="/upcoming"
          href="/upcoming"
          classes={classes}
        >
          Upcoming Retreats
        </NavLink>
        <NavLink href="/" classes={classes}>
          <Icon iconClass={classes["nav--icon"]} iconName="icon-logo-main" />
        </NavLink>
        <NavLink
          activeNav={curPath}
          id="/explore"
          href="/explore"
          classes={classes}
        >
          Past Retreats
        </NavLink>
        <NavLink activeNav={curPath} id="/help" href="/help" classes={classes}>
          Help
        </NavLink>
      </ul>
    </nav>
  );
}
