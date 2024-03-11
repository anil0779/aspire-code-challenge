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
        <button title="close" className="close" onClick={() => onClose()}>
          <img
            src={
              "https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:80c753f2-db2f-4dfc-b6c2-ce39a4c787f0;revision=0?component_id=196843e3-2c42-4194-bbc9-f30e01584ca8&api_key=CometServer1&access_token=1710175834_urn%3Aaaid%3Asc%3AUS%3A80c753f2-db2f-4dfc-b6c2-ce39a4c787f0%3Bpublic_034b26ae5c1ec5929fa0f790937bafb737687e0b"
            }
            alt="close"
          />
        </button>
        {children}
      </ModalBody>
    </ModalContainer>
  );
};

export default Modal;
