import Gallery from "../ui/Gallery";

export default function PastRetreatSummary(props) {
  const { classes, baseClass, idx, title, content, galleryDetails, urlPath } =
    props;

  return (
    <section id={`${urlPath}`} className={classes[`${baseClass}--${idx}`]}>
      <h3 className={`${classes[`${baseClass}--${idx}--title`]} hidden`}>
        {title}
      </h3>
      <article className={`${classes[`${baseClass}--${idx}--content`]} hidden`}>
        <p key={idx}>{content}</p>
      </article>
      <Gallery
        baseClass={`${baseClass}--${idx}`}
        classes={classes}
        galleryDetails={galleryDetails}
      />
    </section>
  );
}
