import Icon from "../ui/Icon";

export default function Footer(props) {
  const { footerIconClass, footerClass } = props;
  const curYear = new Date().getFullYear();

  return (
    <footer className={footerClass}>
      <Icon
        iconClass={`${footerIconClass} hidden`}
        iconName="icon-logo-words-circular"
      />
      <span className="hidden">&copy;{curYear} by The Hust Retreats</span>
    </footer>
  );
}
