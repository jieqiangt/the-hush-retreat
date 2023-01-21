import { useState, useContext, useEffect } from "react";
import Icon from "./Icon";
import LinkButton from "./LinkButton";
import ModalContext from "../../store/modalContext";

export default function Modal(props) {
  const { classes, baseClass, img, aside } = props;
  const { modalIsActive, closeModal } = useContext(ModalContext);
  const [activeClass, setActiveClass] = useState();

  useEffect(() => {
    modalIsActive
      ? setActiveClass(classes[`${baseClass}--modal--active`])
      : setActiveClass(null);
  }, [modalIsActive, classes, baseClass]);

  return (
    <div className={`${classes[`${baseClass}--modal`]} ${activeClass}`}>
      <div className={classes[`${baseClass}--modal--box`]}>
        <LinkButton
          btnClass={classes[`${baseClass}--modal--close`]}
          onClick={closeModal}
        >
          <Icon
            iconClass={classes[`${baseClass}--modal--close--icon`]}
            iconName="icon-cross"
          ></Icon>
        </LinkButton>
        {img}
        {aside}
      </div>
    </div>
  );
}
