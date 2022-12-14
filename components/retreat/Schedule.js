import LinkButton from "../ui/LinkButton";
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
    <div className={`${props.classes[`${props.baseClass}--layout`]} hidden`}>
      <h2 className={props.classes[`${props.baseClass}--title`]}>
        Your Journey
      </h2>
      {scheduleItems}
      <LinkButton
        btnClass={props.classes[`${props.baseClass}--btn`]}
        href={props.href}
        onClick={props.onClick}
      >
        {props.btnText}
      </LinkButton>
    </div>
  );
}
