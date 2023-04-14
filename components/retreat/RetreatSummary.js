import Gallery from "../ui/Gallery";

export default function RetreatSummary(props) {
  const { classes, baseClass, idx, title, content, galleryDetails, retreatId } = props;

  return (
    <section id={`${retreatId}`} className={classes[`${baseClass}--${idx}`]}>
      <h3 className={`${classes[`${baseClass}--${idx}--title`]} hidden`}>
        {title}
      </h3>
      <article className={`${classes[`${baseClass}--${idx}--content`]} hidden`}>
        {content.map((item, idx) => (
          <p key={idx}>{item}</p>
        ))}
      </article>
      <Gallery
        baseClass={`${baseClass}--${idx}`}
        classes={classes}
        galleryDetails={galleryDetails}
      />
    </section>
  );
}
