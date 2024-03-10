import React from "react";

import { ModalContainer, ModalBody } from "./styled";

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose = () => {},
  children,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalContainer>
      <ModalBody>
        <button className="close" onClick={() => onClose()}>
          X
        </button>
        {children}
      </ModalBody>
    </ModalContainer>
  );
};

export default Modal;
