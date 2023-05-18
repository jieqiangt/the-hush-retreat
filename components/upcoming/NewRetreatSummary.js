import Icon from "../ui/Icon";
import LinkButton from "../ui/LinkButton";
import ResponsiveImage from "../ui/ResponsiveImage";

export default function NewRetreatSummary(props) {
  const { classes, baseClass, summary } = props;

  let dateStr = summary.date;

  if (summary.date.includes("/")) {
    const dateStrList = summary.date.split("/");
    dateStr = dateStrList.map((item) => <time key={item}>{item}</time>);
  }

  return (
    <section className={classes[`${baseClass}`]}>
      <div className={classes[`${baseClass}--header--grid`]}>
        <h2 className={classes[`${baseClass}--header`]}>{summary.header}</h2>
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
        <div className={classes[`${baseClass}--desc`]}>
          <p className={classes[`${baseClass}--desc--text`]}>{summary.desc}</p>
          {summary.promotion ? (
            <p className={classes[`${baseClass}--promotion`]}>
              {summary.promotion}
            </p>
          ) : (
            ""
          )}
        </div>

        <div className={classes[`${baseClass}--icon--group`]}>
          <div className={classes[`${baseClass}--btn--outer`]}>
            <LinkButton
              btnClass={classes[`${baseClass}--btn`]}
              href={summary.btnHref}
            >
              {summary.btnText}
            </LinkButton>
          </div>
          <div
            className={`${classes[`${baseClass}--icon--outer`]} ${
              classes[`${baseClass}--icon--date`]
            }`}
          >
            <Icon
              iconClass={classes[`${baseClass}--icon`]}
              iconName="icon-calendar"
            />
            <div className={classes[`${baseClass}--icon--date--box`]}>
              {dateStr}
            </div>
          </div>
          <div
            className={`${classes[`${baseClass}--icon--outer`]} ${
              classes[`${baseClass}--icon--time`]
            }`}
          >
            <Icon
              iconClass={classes[`${baseClass}--icon`]}
              iconName="icon-clock"
            />
            <time>{summary.time}</time>
          </div>
          <div
            className={`${classes[`${baseClass}--icon--outer`]} ${
              classes[`${baseClass}--icon--location`]
            }`}
          >
            <Icon
              iconClass={classes[`${baseClass}--icon`]}
              iconName="icon-location-pin"
            />
            <span>{summary.location}</span>
          </div>
          <div
            className={`${classes[`${baseClass}--icon--outer`]} ${
              classes[`${baseClass}--icon--price`]
            }`}
          >
            <Icon
              iconClass={classes[`${baseClass}--icon`]}
              iconName="icon-coin-dollar"
            />
            <span>{`$${summary.price} per pax`}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
