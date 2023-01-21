import Link from "next/link";

export default function LinkButton(props) {
  const { btnClass, onClick, href, children } = props;

  const renderedBtn = href ? (
    <span className={btnClass}>
      <Link href={href}>{children}</Link>
    </span>
  ) : (
    <button className={btnClass} onClick={onClick}>
      {children}
    </button>
  );

  return renderedBtn;
}
