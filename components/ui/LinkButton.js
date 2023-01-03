import Link from "next/link";

export default function LinkButton(props) {
  const renderedBtn = props.href ? (
    <span className={props.btnClass}>
      <Link href={props.href}>{props.children}</Link>
    </span>
  ) : (
    <button className={props.btnClass} onClick={props.onClick}>
      {props.children}
    </button>
  );

return renderedBtn;
}
