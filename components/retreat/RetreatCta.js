import LinkButton from "../ui/LinkButton";

export default function RetreatCta(props) {
  return (
    <section className={props.classes[`${props.baseClass}`]}>
      <div className={props.classes[`${props.baseClass}--card`]}>
        <h2 className={props.classes[`${props.baseClass}--title`]}>
          {props.title}
        </h2>
        <h3 className={props.classes[`${props.baseClass}--retreat-name`]}>
          {props.retreatName}
        </h3>
        <span className={props.classes[`${props.baseClass}--price`]}>
          {props.priceText}
        </span>
        {props.content}
        <LinkButton
          href="#"
          btnClass={props.classes[`${props.baseClass}--btn`]}
        >
          {props.btnText}
        </LinkButton>
      </div>
    </section>
  );
}
