import { Fragment } from "react";
import Icon from "../ui/Icon";
import LinkButton from "../ui/LinkButton";

export default function RetreatBannerDetails(props) {
  const {
    classes,
    baseClass,
    date,
    time,
    location,
    price,
    promotion,
    btnHref,
    btnText,
    onClick,
    retreatList,
  } = props;

  return (
    <Fragment>
      <div className={classes[`${baseClass}--icon--outer`]}>
        <Icon
          iconClass={classes[`${baseClass}--icon`]}
          iconName="icon-calendar"
        />
        <time className={classes[`${baseClass}--date`]}>{date}</time>
      </div>
      <div className={classes[`${baseClass}--icon--outer`]}>
        <Icon iconClass={classes[`${baseClass}--icon`]} iconName="icon-clock" />
        <time className={classes[`${baseClass}--time`]}>{time}</time>
      </div>
      <div className={classes[`${baseClass}--icon--outer`]}>
        <Icon
          iconClass={classes[`${baseClass}--icon`]}
          iconName="icon-location-pin"
        />
        <span className={classes[`${baseClass}--location`]}>{location}</span>
      </div>
      <div className={classes[`${baseClass}--icon--outer`]}>
        <Icon
          iconClass={classes[`${baseClass}--icon`]}
          iconName="icon-coin-dollar"
        />
        <span className={classes[`${baseClass}--price`]}>{price}</span>
      </div>
      {promotion ? (
        <p className={classes[`${baseClass}--promo`]}>{promotion}</p>
      ) : (
        " "
      )}
      {btnText && (btnHref || onClick) ? (
        <LinkButton
          href={btnHref}
          onClick={onClick}
          btnClass={classes[`${baseClass}--btn`]}
        >
          {btnText}
        </LinkButton>
      ) : (
        ""
      )}
    </Fragment>
  );
}
