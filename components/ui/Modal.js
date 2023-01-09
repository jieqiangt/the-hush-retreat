import { useState, useContext, useEffect } from "react";
import Icon from "./Icon";
import LinkButton from "./LinkButton";
import ModalContext from "../../store/modalContext";

export default function Modal(props) {
  const { modalIsActive, closeModal } = useContext(ModalContext);
  const [activeClass, setActiveClass] = useState();

  useEffect(() => {
    modalIsActive
      ? setActiveClass(props.classes[`${props.baseClass}--modal--active`])
      : setActiveClass(null);
  }, [modalIsActive, props.classes, props.baseClass]);

  return (
    <div
      className={`${props.classes[`${props.baseClass}--modal`]} ${activeClass}`}
    >
      <div className={props.classes[`${props.baseClass}--modal--box`]}>
        <LinkButton
          btnClass={props.classes[`${props.baseClass}--modal--close`]}
          onClick={closeModal}
        >
          <Icon
            iconClass={props.classes[`${props.baseClass}--modal--close--icon`]}
            iconName="icon-cross"
          ></Icon>
        </LinkButton>
        {props.img}
        {props.aside}
      </div>
    </div>
  );
}
