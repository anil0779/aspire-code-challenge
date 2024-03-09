import React, { useState } from "react";

import Tabs from "./../../components/Tabs";
import HeaderComponent from "./Header";
import BodyComponent from "./BodyComponent";
import Accordion from "./../../components/Accordian";
import Carousel from "./CardsCarousel";

import { TAB_LIST, INITIAL_CARDS } from "./../../constants";

import { StyledMyDebitCards } from "./styled";

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

const Cards: React.FC = () => {
  const [activeTab, setActiveTab] = useState(TAB_LIST[0].id);

  const [cardsState, setCardsState] = useState<Cards[]>(INITIAL_CARDS);

  return (
    <div>
      <HeaderComponent />
      <Tabs tabs={TAB_LIST} active={activeTab} setActive={setActiveTab} />
      <BodyComponent>
        {activeTab === TAB_LIST[0].id && (
          <StyledMyDebitCards>
            <div>
              <Carousel cards={cardsState} setCards={setCardsState} />
            </div>
            <div className="flex flex-column gap-6">
              <Accordion title="Card Details">Card Details</Accordion>
              <Accordion title="Recent Transactions" isOpenDefaultState={true}>
                Recent Transactions
              </Accordion>
            </div>
          </StyledMyDebitCards>
        )}
        {activeTab === TAB_LIST[1].id && "All Company card"}
      </BodyComponent>
    </div>
  );
};

export default Cards;
