import Icon from "../ui/Icon";

export default function Footer(props) {
  const curYear = new Date().getFullYear();

  return (
    <footer className={props.footerClass}>
      <Icon
        iconClass={props.footerIconClass}
        iconName="icon-logo-words-circular"
      />
      &copy;{curYear} by The Hust Retreats
    </footer>
  );
}
