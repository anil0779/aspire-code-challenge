import React, { useEffect, useState } from "react";

import Tabs from "./../../components/Tabs";
import HeaderComponent from "./Header";
import BodyComponent from "./BodyComponent";
import Accordion from "./../../components/Accordian";
import Carousel from "./CardsCarousel";
import AddCard from "./AddCard";
import TransactionsList from "./Transactions";

import { getCardsApi, addCardApi } from "./../../api";

import { SAMPLE_TRANSACTION, TAB_LIST } from "./../../constants";

import { StyledMyDebitCards } from "./styled";

interface CardsProps {
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
  const [showAddCardForm, setShowAddCardForm] = useState(false);

  const [cardsState, setCardsState] = useState<CardsProps[]>([]);

  const onClickAddNew = () => {
    setShowAddCardForm(true);
  };

  const handleSubmit = (payload: any) => {
    addCardApi(payload).then(() => {
      fetchList();
      setShowAddCardForm(false);
    });
  };

  const fetchList = () =>
    getCardsApi().then((resp) => {
      if (resp?.length > 0) {
        setCardsState(resp);
      }
    });

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div>
      <HeaderComponent onClickAddNew={onClickAddNew} />
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
                <TransactionsList transactions={SAMPLE_TRANSACTION} />
              </Accordion>
            </div>
          </StyledMyDebitCards>
        )}
        {activeTab === TAB_LIST[1].id && "All Company card"}
      </BodyComponent>
      {showAddCardForm && (
        <AddCard
          onSubmit={handleSubmit}
          onClose={() => setShowAddCardForm(false)}
        />
      )}
    </div>
  );
};

export default Cards;
