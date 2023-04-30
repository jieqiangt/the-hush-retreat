import { useContext } from "react";
import ModalContext from "../../store/modalContext";
import ZLayout from "../ui/ZLayout";
import Schedule from "../ui/Schedule";


export default function NewRetreatSchedule(props) {
  const { classes, baseClass, scheduleList, btnText } = props;
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

  return <ZLayout classes={classes} baseClass={baseClass} content={content} />;
}
