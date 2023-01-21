import LinkButton from "../ui/LinkButton";

export default function RetreatCta(props) {
  const {
    classes,
    baseClass,
    title,
    retreatName,
    priceText,
    content,
    btnText,
  } = props;

  return (
    <section className={classes[`${baseClass}`]}>
      <div className={classes[`${baseClass}--card`]}>
        <h2 className={classes[`${baseClass}--title`]}>
          {title}
        </h2>
        <h3 className={classes[`${baseClass}--retreat-name`]}>
          {retreatName}
        </h3>
        <span className={classes[`${baseClass}--price`]}>
          {priceText}
        </span>
        {content}
        <LinkButton
          href="#"
          btnClass={classes[`${baseClass}--btn`]}
        >
          {btnText}
        </LinkButton>
      </div>
    </section>
  );
}
