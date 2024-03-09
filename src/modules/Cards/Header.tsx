import React from "react";

import AddIcon from "./../../icons/add.svg";

import { StyledHeaderComponent } from "./styled";

const Header: React.FC = () => {
  return (
    <StyledHeaderComponent>
      <div className="available-balance">
        <div>Available Balance</div>
        <div className="balance-container">
          <span className="currency-symbol">S$</span>
          <span className="balance">3,000</span>
        </div>
      </div>
      <div>
        <button className="add-new-btn">
          <img src={AddIcon} alt="add new" />
          <span>New Card</span>
        </button>
      </div>
    </StyledHeaderComponent>
  );
};

export default Header;
