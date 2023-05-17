import BookingForm from "./BookingForm";
import Modal from "../ui/Modal";
import { Fragment } from "react";
import NewRetreatInfo from "./NewRetreatInfo";

export default function NewRetreatBookingModal(props) {
  const {
    classes,
    baseClass,
    retreat,
    modalTitle,
    modalCaption,
    queryMsg,
    isModal,
  } = props;

  const aside = (
    <BookingForm
      isModal={isModal}
      modalTtile={modalTitle}
      modalCaption={modalCaption}
      baseClass={baseClass}
      classes={classes}
      retreat={retreat}
      queryMsg={queryMsg}
    />
  );

  const img = <div className={classes[`${baseClass}--img`]}>&nbsp;</div>;

  return (
    <Modal img={img} aside={aside} baseClass={baseClass} classes={classes} />
  );
}
