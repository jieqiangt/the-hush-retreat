import { Fragment } from "react";
import Icon from "../ui/Icon";

export default function ScheduleItem(props) {
  const { classes, baseClass, numDots, idx, timeRange, iconName, title, desc } =
    props;
  const dummyArr = Array(numDots).fill(" ");
  const divider = dummyArr.map((item, idx) => (
    <span key={idx} className={classes[`${baseClass}--divider`]}>
      &#x2022;
    </span>
  ));

  return (
    <Fragment>
      <time
        className={`${classes[`${baseClass}--time`]} ${
          classes[`${baseClass}--${idx}`]
        }`}
      >
        {timeRange}
      </time>
      <div
        className={`${classes[`${baseClass}--icon--outer`]} ${
          classes[`${baseClass}--${idx}`]
        }`}
      >
        <Icon iconClass={classes[`${baseClass}--icon`]} iconName={iconName} />
        {numDots ? divider : ""}
      </div>
      <div
        className={`${classes[`${baseClass}--activity`]} ${
          classes[`${baseClass}--${idx}`]
        }`}
      >
        <h4 className={classes[`${baseClass}--activity--title`]}>{title}</h4>
        {desc ? (
          <p className={classes[`${baseClass}--activity--desc`]}>{desc}</p>
        ) : (
          ""
        )}
      </div>
    </Fragment>
  );
}
