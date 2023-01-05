import Gallery from "../ui/Gallery";

export default function RetreatSummary(props) {
  return (
    <section className={props.classes[`${props.baseClass}--${props.idx}`]}>
      <h3 className={props.classes[`${props.baseClass}--${props.idx}--title`]}>
        {props.title}
      </h3>
      <article
        className={props.classes[`${props.baseClass}--${props.idx}--content`]}
      >
        {props.content}
      </article>
      <Gallery
        baseClass={`${props.baseClass}--${props.idx}`}
        classes={props.classes}
        galleryDetails={props.galleryDetails}
      />
    </section>
  );
}
