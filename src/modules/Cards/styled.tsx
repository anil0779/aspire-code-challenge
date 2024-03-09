import styled from "styled-components";

export const StyledHeaderComponent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0 12px;
  align-items: end;

  .available-balance {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .balance-container {
    display: flex;
    gap: 12px;
  }

  .balance {
    font-weight: bold;
    font-size: 24px;
  }

  .currency-symbol {
    background: #01d167;
    border-radius: 4px;
    padding: 4px 12px;
  }

  .add-new-btn {
    cursor: pointer;
    display: flex;
    gap: 6px;
    background: #325baf;
    padding: 8px 12px;
    border-radius: 4px;
    color: #fff;
    border: none;
    font-size: 12px;
    font-weight: bold;

    &:hover {
      opacity: 90%;
    }
  }
`;

export const StyledBodyComponent = styled.div`
  padding: 36px;
  border-radius: 6px;
  border: 0.5px solid #00000014;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const StyledMyDebitCards = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 52px;

  > div:first-child {
    flex: 50%;
  }

  > div:last-child {
    flex: 50%;
  }
`;

export const StyledAction = styled.div`
  display: flex;
  font-size: 14px;
  gap: 28px;
  background: #edf3ff;
  padding: 28px 12px;
  border-radius: 8px;

  button {
    cursor: pointer;
    border: none;
    background: transparent;
  }
  button: disabled {
    cursor: not-allowed;
  }

  > div {
    flex: 1;
    cursor: pointer;
    text-align: center;

    &:hover {
      opacity: 80%;
    }
  }
`;

export const StyledCardContainer = styled.div<{ freezed: boolean }>`
  color: #fff;

  .credit-card {
    background: #01d167;
    border-radius: 12px;
    padding: 32px;
    height: 250px;
    opacity: ${(props) => (props.freezed ? 0.5 : 1)};
    cursor: ${(props) => (props.freezed ? "not-allowed" : "inherit")};
  }

  .bank-logo {
    text-align: right;
    height: 32px;

    img {
      height: 100%;
      max-width: 160px;
    }
  }

  .name-on-card {
    font-size: 28px;
    font-weight: bold;
    color: #fff;
    letter-spacing: 2px;
  }

  .card-number {
  }

  .unmasked,
  .masked {
    letter-spacing: 2px;
    display: flex;
    gap: 20px;
    font-weight: bold;
    font-size: 20px;
    margin-top: 32px;
    margin-bottom: 16px;
  }

  .thru {
    margin-right: 80px;
  }

  .thru-and-cvv {
    display: flex;
    font-weight: bold;
    font-size: 14px;
  }

  .masked-cvv {
    font-size: 16px;
  }

  .show-hide-btn {
    margin-bottom: 10px;
    text-align: right;
    button {
      background: transparent;
      border: none;
      color: #01d167;
      font-weight: bold;
    }
  }
`;

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
