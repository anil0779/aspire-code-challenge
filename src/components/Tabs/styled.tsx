import styled from "styled-components";

export const StyledTabContainer = styled.div`
  display: flex;
  gap: 12px;
  background: #ffffff;
  padding: 32px 0 12px;
`;

export const StyledTab = styled.div`
  display: flex;
  cursor: pointer;

  border-bottom: 2px solid transparent;
  padding-bottom: 4px;

  button {
    cursor: pointer;
    background: #ffffff;
    border: none;
  }

  &.active {
    border-color: #325baf;
  }

  &:hover {
    opacity: 80%;
  }
`;
