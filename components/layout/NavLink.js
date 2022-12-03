export default function NavLink(props) {
  return (
    <li>
      <Link href={props.href}>{props.children}</Link>
    </li>
  );
}
