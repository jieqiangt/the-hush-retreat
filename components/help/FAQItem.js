import Icon from "../ui/Icon";

export default function FAQItem(props) {
  const { idx, classes, baseClass, number, question, onClick, active, answer } =
    props;
  const activeClass = active ? classes[`${baseClass}--item--active`] : "";
  const activeArrClass = active
    ? classes[`${baseClass}--item--icon--active`]
    : "";

  return (
    <div idx={idx} className={classes[`${baseClass}--item`]}>
      <button
        idx={idx}
        className={classes[`${baseClass}--item--box`]}
        onClick={onClick}
      >
        <span idx={idx} className={classes[`${baseClass}--item--number`]}>
          {number}
        </span>
        <span idx={idx} className={classes[`${baseClass}--item--question`]}>
          {question}
        </span>
        <Icon
          idx={idx}
          iconClass={`${classes[`${baseClass}--item--icon`]} ${activeArrClass}`}
          iconName="icon-rarr-circle"
        />
      </button>
      <span
        className={`${classes[`${baseClass}--item--answer`]} ${activeClass}`}
      >
        {answer}
      </span>
    </div>
  );
}
