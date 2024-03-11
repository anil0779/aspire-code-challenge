import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
`;

export const ModalBody = styled.div`
  position: relative;
  margin: 200px auto;
  padding: 40px 30px;
  max-width: 440px;
  background-color: #fff;
  border-radius: 12px;

  .close {
    position: absolute;
    right: 12px;
    top: 12px;
    cursor: pointer;
    padding: 0 4px;
    border-radius: 50%;
    border: transparent;
    background: #0c365a;
    color: white;
    font-size: 15px;
  }
`;
