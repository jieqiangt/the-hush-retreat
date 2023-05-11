import { Fragment } from "react";
import ScheduleItem from "./ScheduleItem";

export default function Schedule(props) {
  const { classes, baseClass, scheduleList } = props;

  const scheduleItems = scheduleList.map((item, idx) => (
    <ScheduleItem
      key={idx}
      classes={classes}
      baseClass={baseClass}
      idx={idx + 1}
      timeRange={item.timeRange}
      iconName={item.iconName}
      numDots={item.numDots}
      title={item.title}
      desc={item.desc}
    />
  ));

  return (
    <Fragment>
      <div className={`${classes[`${baseClass}--layout`]} hidden`}>
        {scheduleItems}
      </div>
    </Fragment>
  );
}
