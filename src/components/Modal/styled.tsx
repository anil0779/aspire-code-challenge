import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const ModalBody = styled.div`
  position: relative;
  margin: 50px auto;
  padding: 40px;
  max-width: 500px;
  background-color: #fff;

  .close {
    position: absolute;
    right: 12px;
    top: 12px;
    cursor: pointer;
    padding: 0 4px;
  }
`;
