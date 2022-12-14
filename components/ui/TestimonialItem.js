import classes from "../../sass/pages/home.module.scss";
import LinkButton from "./LinkButton";

export default function TestimonialItem(props) {

  const activeItemClass = props.active ? "carousel--item--active" : "";

  return (
    <div className={`carousel--item ${classes["testimonials--item"]} ${activeItemClass}`}>
      <blockquote className={classes["testimonials--item--quote"]}>
        {props.quote}
      </blockquote>
      <LinkButton
        btnClass={classes["testimonials--item--retreat"]}
        href={props.href}
      >
        {props.retreatName}
      </LinkButton>
      <span className={classes["testimonials--item--name"]}>
        {props.participantName} &#8211; <time>{props.retreatDate}</time>
      </span>
    </div>
  );
}
