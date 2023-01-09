import Link from "next/link";
import classes from "../../sass/layout/layout.module.scss";

export default function NavLink(props) {
  const className =
    props.id && props.id === props.activeNav
      ? `${classes["nav--link"]} ${classes["nav--link--active"]}`
      : `${classes["nav--link"]}`;

  return (
    <li className={className}>
      <Link id={props.id} href={props.href}>
        {props.children}
      </Link>
    </li>
  );
}
