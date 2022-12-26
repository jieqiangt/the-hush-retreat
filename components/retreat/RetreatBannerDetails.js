import { Fragment } from "react";
import Icon from "../ui/Icon";

export default function RetreatBannerDetails(props) {
  return (
    <Fragment>
      <div className={props.classes[`${props.baseClass}--icon--outer`]}>
        <Icon
          iconClass={props.classes[`${props.baseClass}--icon`]}
          iconName="icon-calendar"
        />
        <time className={props.classes[`${props.baseClass}--date`]}>
          {props.date}
        </time>
      </div>
      <div className={props.classes[`${props.baseClass}--icon--outer`]}>
        <Icon
          iconClass={props.classes[`${props.baseClass}--icon`]}
          iconName="icon-clock"
        />
        <time className={props.classes[`${props.baseClass}--time`]}>
          {props.time}
        </time>
      </div>
      <div className={props.classes[`${props.baseClass}--icon--outer`]}>
        <Icon
          iconClass={props.classes[`${props.baseClass}--icon`]}
          iconName="icon-location-pin"
        />
        <span className={props.classes[`${props.baseClass}--location`]}>
          {props.location}
        </span>
      </div>
      <div className={props.classes[`${props.baseClass}--icon--outer`]}>
        <Icon
          iconClass={props.classes[`${props.baseClass}--icon`]}
          iconName="icon-coin-dollar"
        />
        <span className={props.classes[`${props.baseClass}--price`]}>
          {props.price}
        </span>
      </div>
    </Fragment>
  );
}
