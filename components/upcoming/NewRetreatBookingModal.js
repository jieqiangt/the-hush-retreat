import BookingForm from "./BookingForm";
import Modal from "../ui/Modal";

export default function NewRetreatBookingModal(props) {
  const { classes, baseClass, retreatDetails } = props;

  const aside = (
    <section className={classes[`${baseClass}--aside`]}>
      <h3 className={classes[`${baseClass}--aside--title`]}>
        {retreatDetails.name}
      </h3>
      <h4 className={classes[`${baseClass}--aside--cta`]}>
        Enter your booking details Do ea ad qui nostrud id commodo dolore laboris tempor elit dolore non elit. Exercitation voluptate exercitation.
      </h4>
      <BookingForm
        baseClass={baseClass}
        classes={classes}
        retreatDetails={retreatDetails}
      />
    </section>
  );

  const img = <div className={classes[`${baseClass}--img`]}>&nbsp;</div>;

  return (
    <Modal img={img} aside={aside} baseClass={baseClass} classes={classes} />
  );
}
