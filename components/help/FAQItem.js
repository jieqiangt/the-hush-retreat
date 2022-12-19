import classes from "../../sass/pages/home.module.scss";

export default function FAQItem(props) {
  return (
    <div className={classes["faq--item"]}>
      <span className={classes["faq--item--number"]}>{props.number}</span>
      <span className={classes["faq--item--question"]}>{props.question}</span>
      <div className={classes["faq--item--icon"]}>SVG &rarr; &darr;</div>
      <span className={classes["faq--item--answer"]}>{props.answer}</span>
    </div>
  );
}
