import BookingForm from "./BookingForm";
import Modal from "../ui/Modal";
import { Fragment } from "react";
import NewRetreatInfo from "./NewRetreatInfo";

export default function NewRetreatBookingModal(props) {
  const { classes, baseClass, retreat, modalTitle, modalCaption, queryMsg } =
    props;

  const modalInfo = (
    <Fragment>
      <span className={classes[`${baseClass}--aside--info--caption`]}>
        {modalCaption}
      </span>
      <div className={classes[`${baseClass}--aside--info--grid`]}>
        <NewRetreatInfo
          classes={classes}
          baseClass={`${baseClass}--aside--info`}
          retreat={retreat}
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
        queryMsg={queryMsg}
      />
    </section>
  );

  const img = <div className={classes[`${baseClass}--img`]}>&nbsp;</div>;

  return (
    <Modal img={img} aside={aside} baseClass={baseClass} classes={classes} />
  );
}
