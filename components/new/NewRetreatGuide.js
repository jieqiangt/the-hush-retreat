import DescriptionSection from "../ui/DescriptionSection";

export default function NewRetreatGuide(props) {
  const title = "Stephanie Chaunte Leong";
  const text = [
    "I am here as your guide to lead you back home to yourself through your body.",
    "Nothing ignites me as much as this work does, because I have experienced the heart-expanding and invaluable gifts of somatics and depth psychology through my research, teachings, and training.",
    "Learning to awaken and accept all parts of the Self has allowed me to appreciate what it means to feel safe and claim full residence in my own body.",
    "My purpose is to hold space for all humans to embody this homecoming in a gentle way, so that we can experience a safe home in our bodies and ultimately, in this world.",
  ];

  const paragraphs = text.map((item, idx) => <p key={idx}>{item}</p>);
  const content = (
    <article className={props.classes[`${props.baseClass}--aside--content`]}>
      {paragraphs}
    </article>
  );
  const img = <div className={props.classes[`${props.baseClass}--img`]} />;

  return (
    <DescriptionSection
      classes={props.classes}
      baseClass={props.baseClass}
      content={content}
      title={title}
      img={img}
    />
  );
}
