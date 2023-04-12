import DescriptionSection from "../ui/DescriptionSection";
import ImgComposition from "../ui/ImgComposition";

export default function NewRetreatSection(props) {
  const { classes, baseClass, title, text, imgUrlList } = props;

  const paragraphs = text.map((item, idx) => <p key={idx}>{item}</p>);
  const content = (
    <article className={`${classes[`${baseClass}--aside--content`]} hidden`}>
      {paragraphs}
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
