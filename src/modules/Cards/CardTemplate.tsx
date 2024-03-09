import React, { useState } from "react";

import { StyledCardContainer } from "./styled";

interface CreditCardProps {
  name?: string;
  id?: string | number;
  bank?: string;
  bankLogo?: string;
  type?: string; // visa or mastercard etc
  typeLogo?: string;
  maskedNumber?: string;
  maskedCvv?: string;
  color?: string;
  thru?: string;
  unMaskedNumber?: string; // unmasked values should come from api
  unMaskedCvv?: string; // unmasked values should come from api
  freezed?: boolean;
}

const CreditCard: React.FC<CreditCardProps> = ({
  name,
  bankLogo,
  typeLogo,
  thru,
  maskedNumber,
  maskedCvv,
  unMaskedNumber,
  unMaskedCvv,
  freezed = false,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <StyledCardContainer freezed={freezed}>
      <div className="show-hide-btn">
        <label htmlFor="showNumber">
          <img
            style={{ position: "relative", top: "3px", right: "3px" }}
            src={
              "https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:80c753f2-db2f-4dfc-b6c2-ce39a4c787f0;revision=0?component_id=6155771f-c8c4-49df-aa0e-8a1c0821f142&api_key=CometServer1&access_token=1710003816_urn%3Aaaid%3Asc%3AUS%3A80c753f2-db2f-4dfc-b6c2-ce39a4c787f0%3Bpublic_931775a6de535e2753811aad793ece803f7d5c81"
            }
            alt="show-hide"
          />
          <button
            name="showNumber"
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? "Hide Card Number" : "Show Card Number"}
          </button>
        </label>
      </div>
      <div className="credit-card">
        <p className="bank-logo">
          <img src={bankLogo} alt="logo" />
        </p>
        <div className="name-on-card">{name}</div>
        <div className="card-number">
          {showDetails ? (
            <div className="unmasked">
              {unMaskedNumber?.split(" ")?.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
          ) : (
            <div className="masked">
              {maskedNumber?.split(" ")?.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
          )}
        </div>
        <div className="thru-and-cvv">
          <span className="thru">Thru: {thru}</span>
          <span>
            CVV:{" "}
            <span className="masked-cvv">
              {showDetails ? unMaskedCvv : maskedCvv}
            </span>
          </span>
        </div>
        <p className="bank-logo">
          <img src={typeLogo} alt="logo" />
        </p>
      </div>
    </StyledCardContainer>
  );
};

export default CreditCard;
