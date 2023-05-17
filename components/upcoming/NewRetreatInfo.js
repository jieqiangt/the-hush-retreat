import { Fragment } from "react";
import Icon from "../ui/Icon";
import LinkButton from "../ui/LinkButton";

export default function NewRetreatInfo(props) {
  const { classes, baseClass, onClick, btnHref, retreat, isModal } = props;

  return (
    <Fragment>
      {retreat.date | !isModal ? (
        <div className={classes[`${baseClass}--icon--outer`]}>
          <Icon
            iconClass={classes[`${baseClass}--icon`]}
            iconName="icon-calendar"
          />
          <time className={classes[`${baseClass}--date`]}>{retreat.date}</time>
        </div>
      ) : (
        ""
      )}
      {retreat.time ? (
        <div className={classes[`${baseClass}--icon--outer`]}>
          <Icon
            iconClass={classes[`${baseClass}--icon`]}
            iconName="icon-clock"
          />
          <time className={classes[`${baseClass}--time`]}>{retreat.time}</time>
        </div>
      ) : (
        ""
      )}
      {retreat.location ? (
        <div className={classes[`${baseClass}--icon--outer`]}>
          <Icon
            iconClass={classes[`${baseClass}--icon`]}
            iconName="icon-location-pin"
          />
          <span className={classes[`${baseClass}--location`]}>
            {retreat.location}
          </span>
        </div>
      ) : (
        ""
      )}
      {retreat.price ? (
        <div className={classes[`${baseClass}--icon--outer`]}>
          <Icon
            iconClass={classes[`${baseClass}--icon`]}
            iconName="icon-coin-dollar"
          />
          <span
            className={classes[`${baseClass}--price`]}
          >{`$${retreat.price} SGD per pax`}</span>
        </div>
      ) : (
        ""
      )}
      {retreat.promotion ? (
        <p className={classes[`${baseClass}--promo`]}>{retreat.promotion}</p>
      ) : (
        " "
      )}
      {retreat.btnText && (btnHref || onClick) ? (
        <LinkButton
          href={btnHref}
          onClick={onClick}
          btnClass={classes[`${baseClass}--btn`]}
        >
          {retreat.btnText}
        </LinkButton>
      ) : (
        ""
      )}
    </Fragment>
  );
}
