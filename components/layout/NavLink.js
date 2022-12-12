import Link from "next/link";
import classes from "../../sass/layout/layout.module.scss";

export default function NavLink(props) {

  return (
    <li
      className={`${props.className ? ` ${props.className}` : `${classes["nav--link"]}`}`}
    >
      <Link href={props.href}>{props.children}</Link>
    </li>
  );
}
