import React, { useState } from "react";
import { StyledHeader } from "./HeaderContainer/Styled.HeaderContainer";
import Burger from "./Burger/Burger";
import Menu from "./Menu/Menu";
import MobileMenu from "./MobileMenu/MobileMenu";
import { StyledNavContainer } from "./NavContainer/Styled.navContainer";
import { Title } from "./Heading/Styled.heading";
import MobileMenuActive from "./mobileMenuActive/MobileMenuActive";
import { antonio, spartan } from "../../utils/fonts";

export const NavBar = ({ props }: any) => {
  const { planets, singlePlanet, subpage } = props;
  const [open, setOpen] = useState<boolean>(false);
  const close = () => setOpen(false);
  return (
    <>
      <StyledNavContainer>
        <StyledHeader>
          <Title className={antonio.className}>THE PLANETS</Title>
          <Burger open={open} setOpen={setOpen} />
          <MobileMenuActive open={open} props={props} />
          <Menu className={spartan.className} props={props} />
        </StyledHeader>
      </StyledNavContainer>
      <MobileMenu props={props} />
    </>
  );
};
