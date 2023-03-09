import { useContext } from "react";
import ModalContext from "../../store/modalContext";
import Schedule from "../retreat/Schedule";
import ZLayout from "../ui/ZLayout";

export default function NewRetreatSchedule(props) {
  const { classes, baseClass, scheduleList } = props;

  const btnText = "Start Your Journey Here";
  const { openModal } = useContext(ModalContext);

  const content = (
    <Schedule
      scheduleList={scheduleList}
      baseClass={baseClass}
      classes={classes}
      btnText={btnText}
      onClick={openModal}
    />
  );

  return (
    <ZLayout
      classes={classes}
      baseClass={baseClass}
      content={content}
    />
  );
}
