import React, { ReactNode } from "react";

import SideBar from "../SideBar";

import { AppLayoutContainer, ChildContainer } from "./styled";

const AppLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <AppLayoutContainer>
      <div>
        <SideBar />
      </div>
      <ChildContainer>{children}</ChildContainer>
    </AppLayoutContainer>
  );
};

export default AppLayout;
