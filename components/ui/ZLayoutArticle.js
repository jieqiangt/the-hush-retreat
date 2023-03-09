import LinkButton from "./LinkButton";

export default function ZLayoutArticle(props) {
  const { classes, baseClass, title, caption, desc, btnText, btnHref } = props;

  return (
    <div className={classes[`${baseClass}--article`]}>
      <div className={`${classes[`${baseClass}--article--box`]} hidden`}>
        <h2 className={classes[`${baseClass}--article--title`]}>{title}</h2>
        <h3 className={classes[`${baseClass}--article--caption`]}>{caption}</h3>
        <p className={classes[`${baseClass}--article--desc`]}>{desc}</p>
        {btnText && btnHref ? (
          <LinkButton
            btnClass={classes[`${baseClass}--article--btn`]}
            href={btnHref}
          >
            {btnText}
          </LinkButton>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
