import Icon from "../ui/Icon";

export default function Footer(props) {
  const curYear = new Date().getFullYear();

  return (
    <footer className={props.footerClass}>
      <Icon
        iconClass={`${props.footerIconClass} hidden`}
        iconName="icon-logo-words-circular"
      />
      <span className="hidden">&copy;{curYear} by The Hust Retreats</span>
    </footer>
  );
}
