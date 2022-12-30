import DescriptionSection from "../ui/DescriptionSection";
import ImgComposition from "../ui/ImgComposition";

export default function NewRetreatExpect(props) {
  const title = "What to expect";
  const text = [
    "Immerse yourself in a full-day retreat to release the stories and veils of the past, through somatic practices, purified with a fire ceremony.",
    "Start the retreat with a refreshing juice from Mou Gou Juice and nourish your body with a delicious lunch from Tamarind Hill. You will also receive a Welcome Gift from The Hush Retreats that you can take home at the end of the retreat.",
    "Guided by Stephanie Chaunte Leong, through somatic practices, breathwork, embodied dance-movement, expressive art, conscious dreaming, journaling and a fire ceremony as she leads you back home to yourself.",
  ];

  const paragraphs = text.map((item, idx) => <p key={idx}>{item}</p>);
  const content = (
    <article className={props.classes[`${props.baseClass}--aside--content`]}>
      {paragraphs}
    </article>
  );

  const imgUrlList = [
    "/img/fire-2-lg.jpg",
    "/img/dance-2-lg.jpg",
    "/img/meditation-bowl-1-lg.jpg",
  ];
  const img = (
    <div className={props.classes[`${props.baseClass}--img`]}>
      <ImgComposition
        classes={props.classes}
        baseClass={props.baseClass}
        imgUrlList={imgUrlList}
      />
    </div>
  );

  return (
    <DescriptionSection
      classes={props.classes}
      baseClass={props.baseClass}
      title={title}
      content={content}
      img={img}
    />
  );
}
