import React from "react";

import { StyledBodyComponent } from "./styled";

const Body: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <StyledBodyComponent>{children}</StyledBodyComponent>;
};

export default Body;
