import ZLayoutArticle from "./ZLayoutArticle";

export default function ZLayout(props) {
  return (
    <section className={props.classes[props.baseClass]}>
      <div className={props.classes[`${props.baseClass}--img`]} />
      {props.content}
    </section>
  );
}
