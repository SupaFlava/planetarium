import React, { useState } from "react";
import { StyledHeader } from "./HeaderContainer/Styled.HeaderContainer";
import Burger from "./Burger/Burger";
import Menu from "./Menu/Menu";
import MobileMenu from "./MobileMenu/MobileMenu";
import { StyledNavContainer } from "./NavContainer/Styled.navContainer";
import { Title } from "./Heading/Styled.heading";
import MobileMenuActive from "./mobileMenuActive/MobileMenuActive";

export const NavBar = ({ props }: any) => {
  const { planets, singlePlanet, subpage } = props;
  console.log("props in the navvvv", props);
  const [open, setOpen] = useState<boolean>(false);
  const close = () => setOpen(false);
  return (
    <>
      <StyledNavContainer>
        <StyledHeader>
          <Title>THE PLANETS</Title>
          <Burger open={open} setOpen={setOpen} />
          <MobileMenuActive open={open} planets={planets} />
          <Menu props={props} />
        </StyledHeader>
      </StyledNavContainer>
      <MobileMenu props={props} />
    </>
  );
};
