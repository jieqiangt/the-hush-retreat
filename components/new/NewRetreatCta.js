import { Fragment } from "react";
import RetreatCta from "../retreat/RetreatCta";

export default function NewRetreatCta(props) {
  const text = [
    "A Full-Day Program designed to Release & Renew",
    "Cold-Pressed Juice from MouGou Juice",
    "Lunch @ Tamarind Hall (Vegeterian & Non Vegeterian Options)",
    "Welcome Gift from The Hush Retreats",
  ];

  const paragraphs = text.map((item, idx) => (
    <p key={idx} className={props.classes[`${props.baseClass}--content-desc`]}>
      {item}
    </p>
  ));

  const content = (
    <Fragment>
      <span className={props.classes[`${props.baseClass}--content--title`]}>
        Inclusions:
      </span>
      <article className={props.classes[`${props.baseClass}--content`]}>
        {paragraphs}
      </article>
    </Fragment>
  );

  return (
    <RetreatCta
      baseClass={props.baseClass}
      classes={props.classes}
      title="Retreat Details"
      retreatName="Release & Renew"
      priceText="$399/Pax"
      content={content}
      href="#"
      btnText="Register Here"
    />
  );
}
