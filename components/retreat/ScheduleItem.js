import { Fragment } from "react";
import Icon from "../ui/Icon";

export default function ScheduleItem(props) {
  const dummyArr = Array(props.numDots).fill(" ");
  const divider = dummyArr.map((item, idx) => (
    <span key={idx} className={props.classes[`${props.baseClass}--divider`]}>
      &#x2022;
    </span>
  ));

  return (
    <Fragment>
      <time
        className={`${props.classes[`${props.baseClass}--time`]} ${
          props.classes[`${props.baseClass}--${props.idx}`]
        }`}
      >
        {props.timeRange}
      </time>
      <div
        className={`${props.classes[`${props.baseClass}--icon--outer`]} ${
          props.classes[`${props.baseClass}--${props.idx}`]
        }`}
      >
        <Icon
          iconClass={props.classes[`${props.baseClass}--icon`]}
          iconName={props.iconName}
        />
        {props.numDots ? divider : ""}
      </div>
      <div
        className={`${props.classes[`${props.baseClass}--activity`]} ${
          props.classes[`${props.baseClass}--${props.idx}`]
        }`}
      >
        <h4 className={props.classes[`${props.baseClass}--activity--title`]}>
          {props.title}
        </h4>
        {props.desc ? (
          <p className={props.classes[`${props.baseClass}--activity--desc`]}>
            {props.desc}
          </p>
        ) : (
          ""
        )}
      </div>
    </Fragment>
  );
}
