import { Fragment } from "react";
import Icon from "../ui/Icon";
import LinkButton from "../ui/LinkButton";

export default function NewRetreatInfo(props) {
  const { classes, baseClass, btnText, onClick, btnHref, retreatDetails } =
    props;

  return (
    <Fragment>
      <div className={classes[`${baseClass}--icon--outer`]}>
        <Icon
          iconClass={classes[`${baseClass}--icon`]}
          iconName="icon-calendar"
        />
        <time className={classes[`${baseClass}--date`]}>
          {retreatDetails.date}
        </time>
      </div>
      <div className={classes[`${baseClass}--icon--outer`]}>
        <Icon iconClass={classes[`${baseClass}--icon`]} iconName="icon-clock" />
        <time className={classes[`${baseClass}--time`]}>
          {retreatDetails.time}
        </time>
      </div>
      <div className={classes[`${baseClass}--icon--outer`]}>
        <Icon
          iconClass={classes[`${baseClass}--icon`]}
          iconName="icon-location-pin"
        />
        <span className={classes[`${baseClass}--location`]}>
          {retreatDetails.location}
        </span>
      </div>
      <div className={classes[`${baseClass}--icon--outer`]}>
        <Icon
          iconClass={classes[`${baseClass}--icon`]}
          iconName="icon-coin-dollar"
        />
        <span className={classes[`${baseClass}--price`]}>
          {retreatDetails.price}
        </span>
      </div>
      {retreatDetails.promotion ? (
        <p className={classes[`${baseClass}--promo`]}>
          {retreatDetails.promotion}
        </p>
      ) : (
        " "
      )}
      {retreatDetails.btnText && (btnHref || onClick) ? (
        <LinkButton
          href={btnHref}
          onClick={onClick}
          btnClass={classes[`${baseClass}--btn`]}
        >
          {retreatDetails.btnText}
        </LinkButton>
      ) : (
        ""
      )}
    </Fragment>
  );
}
