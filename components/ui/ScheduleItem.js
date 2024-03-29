import { Fragment } from "react";
import Icon from "./Icon";

export default function ScheduleItem(props) {
  const { classes, baseClass, numDots, idx, timeRange, iconName, title, desc } =
    props;
  const dummyArr = Array(numDots).fill(" ");
  const divider = dummyArr.map((item, idx) => (
    <span key={idx} className={classes[`${baseClass}--divider`]}>
      &#x2022;
    </span>
  ));

  const descItems = desc
    ? desc.map((item, idx) => (
        <p key={idx} className={classes[`${baseClass}--activity--desc--item`]}>
          {item}
        </p>
      ))
    : "";

  return (
    <Fragment>
      <time
        className={`${classes[`${baseClass}--time`]} ${
          classes[`${baseClass}--time--${idx}`]
        }`}
      >
        {timeRange}
      </time>
      <div
        className={`${classes[`${baseClass}--icon--outer`]} ${
          classes[`${baseClass}--icon--outer--${idx}`]
        }`}
      >
        <Icon iconClass={classes[`${baseClass}--icon`]} iconName={iconName} />
        {numDots ? divider : ""}
      </div>
      <div
        className={`${classes[`${baseClass}--activity`]} ${
          classes[`${baseClass}--activity--${idx}`]
        }`}
      >
        <h4 className={classes[`${baseClass}--activity--title`]}>{title}</h4>
        {desc ? (
          <div className={classes[`${baseClass}--activity--desc`]}>
            {descItems}
          </div>
        ) : (
          ""
        )}
      </div>
    </Fragment>
  );
}
