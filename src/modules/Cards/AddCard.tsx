import React, { ChangeEvent, useState } from "react";

import Modal from "./../../components/Modal";

import { TitleModal } from "./styled";

interface AddCardProps {
  onSubmit: (formValues: { name: string }) => void;
  onClose: () => void;
}

const AddCard: React.FC<AddCardProps> = ({ onSubmit, onClose }) => {
  const [name, setName] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <Modal isOpen onClose={onClose}>
      <TitleModal className="title-modal">Add new Card</TitleModal>
      <div className="flex flex-column" style={{ gap: "4px" }}>
        <label
          style={{ width: "100%", fontSize: "14px", fontWeight: "bold" }}
          htmlFor="cardName"
        >
          Card name:
        </label>
        <input
          style={{ width: "100%", height: "32px" }}
          type="text"
          id="cardName"
          name="cardName"
          value={name}
          onChange={handleChange}
        />
      </div>

      <br />
      <br />
      <div className="center">
        <input
          style={{
            padding: "4px 8px",
            borderRadius: "4px",
            cursor: "pointer",
            background: "#0c365a",
            color: "#FFF",
            height: "40px",
            width: "96px",
            fontSize: "16px",
            fontWeight: "bold",
          }}
          type="button"
          value="Submit"
          disabled={!name?.length}
          onClick={() => {
            onSubmit({ name });
          }}
        />
      </div>
    </Modal>
  );
};

export default AddCard;
