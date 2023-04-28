import BookingForm from "./BookingForm";
import Modal from "../ui/Modal";
import { Fragment } from "react";
import NewRetreatInfo from "./NewRetreatInfo";

export default function NewRetreatBookingModal(props) {
  const {
    classes,
    baseClass,
    retreatDetails,
    modalTitle,
    modalCaption,
    retreat,
  } = props;

  const modalInfo = (
    <Fragment>
      <span className={classes[`${baseClass}--aside--info--caption`]}>
        {modalCaption}
      </span>
      <div className={classes[`${baseClass}--aside--info--grid`]}>
        <NewRetreatInfo
          classes={classes}
          baseClass={`${baseClass}--aside--info`}
          retreatDetails={retreatDetails}
        />
      </div>
    </Fragment>
  );

  const aside = (
    <section className={classes[`${baseClass}--aside`]}>
      <h3 className={classes[`${baseClass}--aside--title`]}>{modalTitle}</h3>
      {modalInfo}
      <BookingForm
        baseClass={baseClass}
        classes={classes}
        retreat={retreat}
        selectOptions={retreat.selectOptions}
      />
    </section>
  );

  const img = <div className={classes[`${baseClass}--img`]}>&nbsp;</div>;

  return (
    <Modal img={img} aside={aside} baseClass={baseClass} classes={classes} />
  );
}
