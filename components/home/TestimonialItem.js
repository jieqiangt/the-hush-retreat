import LinkButton from "../ui/LinkButton";

export default function TestimonialItem(props) {
  const {
    baseClass,
    classes,
    active,
    quote,
    href,
    carouselItemClass,
    carouselItemActiveClass,
    retreatName,
    participantName,
    retreatDate
  } = props;
  const activeItemClass = active ? carouselItemActiveClass : "";

  return (
    <div
      className={`${classes[`${baseClass}--item`]} ${carouselItemClass} ${activeItemClass}`}
    >
      <blockquote className={classes[`${baseClass}--item--quote`]}>
        &#x275D; {quote} &#x275E;
      </blockquote>
      <LinkButton
        btnClass={classes[`${baseClass}--item--retreat`]}
        href={href}
      >
        {retreatName}
      </LinkButton>
      <span className={classes[`${baseClass}--item--name`]}>
        {participantName} &#8211; <time>{retreatDate}</time>
      </span>
    </div>
  );
}
