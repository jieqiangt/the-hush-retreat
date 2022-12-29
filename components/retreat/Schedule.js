import ScheduleItem from "./ScheduleItem";

export default function Schedule(props) {
  const scheduleItems = props.scheduleList.map((item, idx) => (
    <ScheduleItem
      key={idx}
      classes={props.classes}
      baseClass={props.baseClass}
      idx={idx + 1}
      timeRange={item.timeRange}
      iconName={item.iconName}
      numDots={item.numDots}
      title={item.title}
      desc={item.desc}
    />
  ));

  return (
    <section className={props.classes[`${props.baseClass}`]}>
      <h2 className={props.classes[`${props.baseClass}--title`]}>
        Your Schedule
      </h2>
      {scheduleItems}
    </section>
  );
}
