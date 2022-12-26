import { Fragment } from "react";
import LinkButton from "../ui/LinkButton";
import classes from "../../sass/pages/home.module.scss";

export default function RetreatBanner(props) {
  return (
    <Fragment>
      <section className={classes["banner"]}>
        <div className={classes["banner--box"]}>
          <h2 className={classes["banner--title"]}>{props.title}</h2>
          <div className={classes["banner--details"]}>
            <Icon
              iconClass={classes["banner--icon"]}
              iconName="icon-calendar"
            />
            <time className={classes["banner--date"]}>{props.date}</time>
          </div>
          <div className={classes["banner--details"]}>
            <Icon iconClass={classes["banner--icon"]} iconName="icon-clock" />
            <time className={classes["banner--time"]}>{props.time}</time>
          </div>
          <div className={classes["banner--details"]}>
            <Icon
              iconClass={classes["banner--icon"]}
              iconName="icon-location"
            />
            <span className={classes["banner--loc"]}>{props.location}</span>
          </div>
          <LinkButton href="/new" btnClass={classes["hero--btn"]}>
            Start Healing Now
          </LinkButton>
        </div>
      </section>
    </Fragment>
  );
}
