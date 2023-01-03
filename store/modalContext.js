import { createContext, useState } from "react";

const contextStructure = {
  modalIsActive: false,
  openModal: function () {},
  closeModal: function () {},
};

const ModalContext = createContext(contextStructure);

export function ModalContextProvider(props) {
  const [modalIsActive, setModalIsActive] = useState(false);

  const closeModal = () => {
    setModalIsActive(null);
  };

  const openModal = () => {
    setModalIsActive(true);
  };

  const context = {
    modalIsActive,
    closeModal,
    openModal,
  };

  return (
    <ModalContext.Provider value={context}>
      {props.children}
    </ModalContext.Provider>
  );
}

export default ModalContext;
