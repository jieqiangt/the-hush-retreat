import LinkButton from "./LinkButton";

export default function ZLayoutArticle(props) {
  return (
    <div className={props.classes[`${props.baseClass}--article`]}>
      <div className={props.classes[`${props.baseClass}--article--box`]}>
        <h2 className={props.classes[`${props.baseClass}--article--title`]}>
          {props.title}
        </h2>
        <h3 className={props.classes[`${props.baseClass}--article--caption`]}>
          {props.caption}
        </h3>
        <p className={props.classes[`${props.baseClass}--article--desc`]}>
          {props.desc}
        </p>
        {props.btnText && props.btnHref ? (
          <LinkButton
            btnClass={props.classes[`${props.baseClass}--article--btn`]}
            href={props.btnHref}
          >
            {props.btnText}
          </LinkButton>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
