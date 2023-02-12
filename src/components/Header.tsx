import React from "react";
import { StyledHeader } from "./styles/Styled.Header";
import Burger from "./Burger/Burger";
import Menu from "./Menu/Menu";

import { StylednavContainer } from "./styles/Styled.navContainer";

export const Header = () => {
  return (
    <StylednavContainer>
      <StyledHeader>
        <h1>THE PLANETS</h1>
        <Burger />
        <Menu />
      </StyledHeader>
    </StylednavContainer>
  );
};
