import React from "react";
import { StyledHeader } from "./HeaderContainer/Styled.HeaderContainer";
import Burger from "./Burger/Burger";
import Menu from "./Menu/Menu";
import MobileMenu from "./MobileMenu/MobileMenu";
import { StyledNavContainer } from "./NavContainer/Styled.navContainer";
import { Title } from "./Heading/Styled.heading";

export const NavBar = () => {
  return (
    <>
      <StyledNavContainer>
        <StyledHeader>
          <Title>THE PLANETS</Title>
          <Burger />
          <Menu />
        </StyledHeader>
      </StyledNavContainer>
      <MobileMenu />
    </>
  );
};
