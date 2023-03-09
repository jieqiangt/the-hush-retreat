import DescriptionSection from "../ui/DescriptionSection";

export default function NewRetreatSection(props) {
  const { classes, baseClass, title, text } = props;

  const paragraphs = text.map((item, idx) => <p key={idx}>{item}</p>);
  const content = (
    <article
      className={`${
        classes[`${baseClass}--aside--content`]
      } hidden`}
    >
      {paragraphs}
    </article>
  );
  const img = <div className={`${classes[`${baseClass}--img`]} hidden`} />;

  return (
    <DescriptionSection
      classes={classes}
      baseClass={baseClass}
      title={title}
      img={img}
      content={content}
    />
  );
}
