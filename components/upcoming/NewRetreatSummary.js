import Icon from "../ui/Icon";
import LinkButton from "../ui/LinkButton";
import ResponsiveImage from "../ui/ResponsiveImage";

export default function NewRetreatSummary(props) {
  const { classes, baseClass, summary } = props;

  return (
    <section className={classes[`${baseClass}`]}>
      <div className={classes[`${baseClass}--title--grid`]}>
        <h2 className={classes[`${baseClass}--title`]}>{summary.title}</h2>
        <h3 className={classes[`${baseClass}--caption`]}>{summary.caption}</h3>
      </div>
      <div className={classes[`${baseClass}--img--grid`]}>
        <ResponsiveImage
          imgBoxClassName={classes[`${baseClass}--img--box`]}
          imgClassName={classes[`${baseClass}--img`]}
          src={summary.imgSrc[0]}
          alt={summary.title}
          sizes="(max-width: 46.875em) 100vw,
          50vw"
        />
        <ResponsiveImage
          imgBoxClassName={classes[`${baseClass}--img--box`]}
          imgClassName={classes[`${baseClass}--img`]}
          src={summary.imgSrc[1]}
          alt={summary.title}
          sizes="(max-width: 46.875em) 100vw,
          50vw"
        />
      </div>
      <div className={`${classes[`${baseClass}--desc--grid`]} hidden`}>
        <p className={classes[`${baseClass}--desc`]}>{summary.desc}</p>
        <div className={classes[`${baseClass}--icon--group`]}>
          <LinkButton
            btnClass={classes[`${baseClass}--btn`]}
            href={summary.btnHref}
          >
            {summary.btnText}
          </LinkButton>
          <div className={classes[`${baseClass}--icon--outer`]}>
            <Icon
              iconClass={classes[`${baseClass}--icon`]}
              iconName="icon-calendar"
            />
            <time className={classes[`${baseClass}--date`]}>
              {summary.date}
            </time>
          </div>
          <div className={classes[`${baseClass}--icon--outer`]}>
            <Icon
              iconClass={classes[`${baseClass}--icon`]}
              iconName="icon-clock"
            />
            <time className={classes[`${baseClass}--time`]}>
              {summary.time}
            </time>
          </div>
          <div className={classes[`${baseClass}--icon--outer`]}>
            <Icon
              iconClass={classes[`${baseClass}--icon`]}
              iconName="icon-location-pin"
            />
            <span className={classes[`${baseClass}--location`]}>
              {summary.location}
            </span>
          </div>
          <div className={classes[`${baseClass}--icon--outer`]}>
            <Icon
              iconClass={classes[`${baseClass}--icon`]}
              iconName="icon-coin-dollar"
            />
            <span className={classes[`${baseClass}--price`]}>
              {summary.price}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
