import LinkButton from "./LinkButton";
import ScheduleItem from "./ScheduleItem";

export default function Schedule(props) {
  const { classes, baseClass, scheduleList, href, onClick, btnText } = props;

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
    <div className={`${classes[`${baseClass}--layout`]} hidden`}>
      <h2 className={classes[`${baseClass}--title`]}>Your Journey</h2>
      {scheduleItems}
      <LinkButton
        btnClass={classes[`${baseClass}--btn`]}
        href={href}
        onClick={onClick}
      >
        {btnText}
      </LinkButton>
    </div>
  );
}
