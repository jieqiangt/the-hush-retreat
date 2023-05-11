import DescriptionSection from "../ui/DescriptionSection";
import ImgComposition from "../ui/ImgComposition";

export default function NewRetreatSection(props) {
  const { classes, baseClass, title, text, caption, imgUrlList } = props;

  const paragraphs = text.map((item, idx) => (
    <p
      className={`${classes[`${baseClass}--aside--desc--text`]} hidden`}
      key={idx}
    >
      {item}
    </p>
  ));

  const captions = caption
    ? caption.map((item, idx) => (
        <p
          className={`${classes[`${baseClass}--aside--caption--text`]} hidden`}
          key={idx}
        >
          {item}
        </p>
      ))
    : "";
  const content = (
    <article className={`${classes[`${baseClass}--aside--content`]} hidden`}>
      <div className={`${classes[`${baseClass}--aside--caption`]}`}>
        {captions}
      </div>
      <div className={`${classes[`${baseClass}--aside--desc`]}`}>
        {paragraphs}
      </div>
    </article>
  );

  const img = imgUrlList ? (
    <div className={classes[`${baseClass}--img`]}>
      <ImgComposition
        classes={classes}
        baseClass={baseClass}
        imgUrlList={imgUrlList}
      />
    </div>
  ) : (
    <div className={`${classes[`${baseClass}--img`]} hidden`} />
  );

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
