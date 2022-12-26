import ZLayoutArticle from "./ZLayoutArticle";

export default function ZLayout(props) {
  return (
    <section className={props.classes[props.baseClass]}>
      <div className={props.classes[`${props.baseClass}--img`]} />
      <ZLayoutArticle
        classes={props.classes}
        baseClass={props.baseClass}
        title={props.title}
        caption={props.caption}
        desc={props.desc}
        btnText={props.btnText}
        btnHref={props.btnHref}
      />
    </section>
  );
}
