import NavLink from "./NavLink";
import Icon from "../ui/Icon";
import classes from "../../sass/layout/layout.module.scss";
import { useRouter } from "next/router";
import { Fragment } from "react";

export default function NavBar(props) {
  const router = useRouter();
  const curPath = router.pathname;

  return (
    <Fragment>
      <input
        type="checkbox"
        className={classes["nav--checkbox"]}
        id="nav--toggle"
      ></input>
      <label for="nav--toggle" className={classes["nav--btn"]}>
        <Icon iconClass={classes["nav--btn--close"]} iconName="icon-cross" />
        <Icon
          iconClass={classes["nav--btn--menu"]}
          iconName="icon-logo-words-circular"
        />
      </label>
      <div className={classes["nav--bg"]}>&nbsp;</div>
      <nav className={classes["nav--bar"]}>
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
          <NavLink
            activeNav={curPath}
            id="/help"
            href="/help"
            classes={classes}
          >
            Help
          </NavLink>
        </ul>
      </nav>
    </Fragment>
  );
}
