import React from "react";
import { StyledHeader } from "./Header/Styled.Header";
import Burger from "./Burger/Burger";
import Menu from "./Menu/Menu";
import MobileMenu from "./MobileMenu/MobileMenu";
import { StyledNavContainer } from "./NavContainer/Styled.navContainer";

export const NavBar = () => {
  return (
    <>
      <StyledNavContainer>
        <StyledHeader>
          <h1>THE PLANETS</h1>
          <Burger />
          <Menu />
        </StyledHeader>
      </StyledNavContainer>
      <MobileMenu />
    </>
  );
};
