import Link from "next/link";

export default function NavLink(props) {
  const { activeNav, id, href, children, classes } = props;
  const className =
    id && id === activeNav
      ? `${classes["nav--link"]} ${classes["nav--link--active"]}`
      : `${classes["nav--link"]}`;

  return (
    <li className={className}>
      <Link id={id} href={href}>
        {children}
      </Link>
    </li>
  );
}
