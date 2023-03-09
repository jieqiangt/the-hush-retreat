import BookingForm from "./BookingForm";
import Modal from "../ui/Modal";

export default function NewRetreatBookingModal(props) {
  const { classes, baseClass, text, retreatDetails } = props;

  const paragraphs = text.map((item, idx) => <p key={idx}>{item}</p>);
  const content = (
    <article className={classes[`${baseClass}--aside--content`]}>
      {paragraphs}
    </article>
  );

  const aside = (
    <section className={classes[`${baseClass}--aside`]}>
      <h3 className={classes[`${baseClass}--aside--title`]}>
        {retreatDetails.name}
      </h3>
      {content}
      <h4 className={classes[`${baseClass}--aside--title`]}>
        Register Your Interest
      </h4>
      <BookingForm
        baseClass={baseClass}
        classes={classes}
        retreatDetails={retreatDetails}
      />
    </section>
  );

  const img = (
    <div className={classes[`${baseClass}--img--outer`]}>
      <div
        className={`${classes[`${baseClass}--img`]} ${
          classes[`${baseClass}--img--1`]
        }`}
      >
        &nbsp;
      </div>
      <div
        className={`${classes[`${baseClass}--img`]} ${
          classes[`${baseClass}--img--2`]
        }`}
      >
        &nbsp;
      </div>
    </div>
  );

  return (
    <Modal img={img} aside={aside} baseClass={baseClass} classes={classes} />
  );
}
