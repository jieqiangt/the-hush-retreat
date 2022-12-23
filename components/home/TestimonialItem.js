import { Fragment } from "react";
import classes from "../../sass/pages/home.module.scss";
import LinkButton from "../ui/LinkButton";

export default function TestimonialItem(props) {
  const activeItemClass = props.active ? props.carouselItemActiveClass : "";

  return (
    <div
      className={`${classes["testimonials--item"]} ${props.carouselItemClass} ${activeItemClass}`}
    >
      <blockquote className={classes["testimonials--item--quote"]}>
        &#x275D; {props.quote} &#x275E;
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
