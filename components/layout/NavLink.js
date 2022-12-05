import Link from "next/link";
import classes from "./sass/nav.module.scss";

export default function NavLink(props) {
  return (
    <li className={classes["nav--link"]}>
      <Link href={props.href}>{props.children}</Link>
    </li>
  );
}
