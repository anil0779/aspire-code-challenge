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
      <div className="flex" style={{ gap: "8px" }}>
        <label htmlFor="cardName">Card name:</label>
        <input
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
          style={{ padding: "4px 8px", borderRadius: "4px", cursor: "pointer" }}
          type="button"
          value="submit"
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
