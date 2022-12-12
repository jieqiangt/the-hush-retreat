import Link from "next/link"

export default function LinkButton(props) {
    return (
        <span className="link-btn">
            <Link href={props.href}>{props.children}</Link>
        </span>
    )
}