import Icon from "../ui/Icon";
import LinkButton from "../ui/LinkButton";

export default function Footer(props) {
  const { footerIconClass, footerClass, footerBtnClass } = props;
  const curYear = new Date().getFullYear();

  return (
    <footer className={footerClass}>
      <Icon
        iconClass={`${footerIconClass} hidden`}
        iconName="icon-logo-words-circular"
      />
      <p className="hidden">
        <span>&copy;</span>
        {curYear} by The Hust Retreats
      </p>
      <p className="hidden">
        <span>&copy;</span>Designed & Deployed by{" "}
        <LinkButton
          href="https://www.linkedin.com/in/jieqiangtan/"
          btnClass={`${footerBtnClass} hidden`}
        >
          jieqiangt
        </LinkButton>
      </p>
    </footer>
  );
}
