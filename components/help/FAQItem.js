import classes from "../../sass/pages/help.module.scss";

export default function FAQItem(props) {
  const activeClass = props.active ? classes["faq--item--active"] : "";
  const activeArrClass = props.active ? classes["faq--item--icon--active"] : "";

  return (
    <div idx={props.idx} className={classes["faq--item"]}>
      <button
        idx={props.idx}
        className={classes["faq--item--box"]}
        onClick={props.onClick}
      >
        <span idx={props.idx} className={classes["faq--item--number"]}>{props.number}</span>
        <span idx={props.idx} className={classes["faq--item--question"]}>{props.question}</span>
        <span idx={props.idx} className={`${classes["faq--item--icon"]} ${activeArrClass}`}>
          &rarr;
        </span>
      </button>
      <span className={`${classes["faq--item--answer"]} ${activeClass}`}>
        {props.answer}
      </span>
    </div>
  );
}
