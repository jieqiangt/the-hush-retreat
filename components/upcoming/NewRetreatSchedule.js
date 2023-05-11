import { useContext } from "react";
import ModalContext from "../../store/modalContext";
import ZLayout from "../ui/ZLayout";
import Schedule from "../ui/Schedule";
import LinkButton from "../ui/LinkButton";

export default function NewRetreatSchedule(props) {
  const { classes, baseClass, scheduleList, title, btnText, href, onClick } =
    props;
  const { openModal } = useContext(ModalContext);

  const content = (
    <aside className={classes[`${baseClass}--aside`]}>
      <h2 className={classes[`${baseClass}--title`]}>{title}</h2>
      <Schedule
        scheduleList={scheduleList}
        baseClass={baseClass}
        classes={classes}
        btnText={btnText}
      />
      <LinkButton
        btnClass={classes[`${baseClass}--btn`]}
        href={href}
        onClick={openModal}
      >
        {btnText}
      </LinkButton>
    </aside>
  );

  return <ZLayout classes={classes} baseClass={baseClass} content={content} />;
}
