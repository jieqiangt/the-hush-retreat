import DescriptionSection from "../ui/DescriptionSection";

export default function NewRetreatIntentions(props) {
  const title = "Set your intentions";
  const text = [
    "Immerse yourself in a full-day retreat to release the stories and veils of the past.",
    "As we let go of the old year and versions of ourselves, we step through the portal into new beginnings, getting clear on what truly matters, on who we want to be, and how we serve. We birth ourselves to oursleves, through a powerful embodied intention-setting ritual.",
    "Begin the retreat with releasing what doesn't serve you anymore and enter into the second half as we set intentions for the new year. This full-day retreat will truly be a gift yourself & your loved ones. We look forward to holding space for you.",
  ];

  const paragraphs = text.map((item) => <p>{item}</p>);
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
      title={title}
      img={img}
      content={content}
    />
  );
}
