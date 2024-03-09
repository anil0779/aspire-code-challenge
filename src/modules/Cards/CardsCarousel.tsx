import React, { useEffect, useState } from "react";

import CreditCard from "./CardTemplate";

import FreezeIcon from "./../../icons/Freeze card.svg";
import SpendLimit from "./../../icons/Set spend limit.svg";
import AddGpay from "./../../icons/GPay.svg";
import ReplaceCard from "./../../icons/Replace card.svg";
import CancelCard from "./../../icons/Deactivate card.svg";

import { CarouselContainer, StyledAction } from "./styled";

interface Cards {
  url?: string;
  id?: string | number;
  name?: string;
  bank?: string;
  bankLogo?: string;
  type?: string; // visa or mastercard etc
  typeLogo?: string;
  maskedNumber?: string;
  maskedCvv?: string;
  color?: string;
  thru?: string;
  unMaskedNumber?: string;
  unMaskedCvv?: string;
  freezed?: boolean;
}

interface CarouselProps {
  cards: Cards[];
  setCards: React.Dispatch<React.SetStateAction<Cards[]>>;
}

const Carousel: React.FC<CarouselProps> = ({ cards, setCards }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const freezed = cards[currentImageIndex]?.freezed;

  const nextSlide = () => {
    const newIndex =
      currentImageIndex >= cards.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex =
      currentImageIndex <= 0 ? cards.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
  };

  const handleFreeze = () => {
    setCards((cards: any[]) => {
      return cards.map((card, id) => {
        if (id === currentImageIndex) {
          return { ...card, freezed: !card.freezed };
        }
        return { ...card };
      });
    });
  };

  return (
    <CarouselContainer>
      <div>
        <CreditCard
          key={cards[currentImageIndex]?.id}
          {...cards[currentImageIndex]}
        />
        <div style={{ textAlign: "center", marginTop: "12px" }}>
          {cards.map((image, index) => (
            <span
              key={image?.id || index}
              style={{
                height: "10px",
                width: "10px",
                margin: "5px",
                backgroundColor:
                  currentImageIndex === index ? "#01D167" : "#DDFFEC",
                borderRadius: "50%",
                display: "inline-block",
                cursor: "pointer",
              }}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>
      <StyledAction key={cards[currentImageIndex]?.id}>
        <button onClick={() => handleFreeze()}>
          <img src={FreezeIcon} alt={"freeze"} />
          <div> {freezed ? "Unfreeze card" : "Freeze card"}</div>
        </button>
        <button disabled={freezed}>
          <img src={SpendLimit} alt={"freeze"} />
          <div>Set spend limit</div>
        </button>
        <button disabled={freezed}>
          <img src={AddGpay} alt={"freeze"} />
          <div>Add to GPay</div>
        </button>
        <button disabled={freezed}>
          <img src={ReplaceCard} alt={"freeze"} />
          <div>Replace card</div>
        </button>
        <button disabled={freezed}>
          <img src={CancelCard} alt={"freeze"} />
          <div>Cancel card</div>
        </button>
      </StyledAction>
    </CarouselContainer>
  );
};

export default Carousel;
