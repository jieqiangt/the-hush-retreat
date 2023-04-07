import Link from "next/link";

export default function LinkButton(props) {
  const { btnClass, onClick, href, children, idx } = props;

  const renderedBtn = href ? (
    <span className={btnClass}>
      <Link href={href}>{children}</Link>
    </span>
  ) : (
    <button idx={idx} className={btnClass} onClick={onClick}>
      {children}
    </button>
  );

  return renderedBtn;
}
