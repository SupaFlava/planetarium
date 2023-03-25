import React, { useState } from "react";
import { StyledHeader } from "./HeaderContainer/Styled.HeaderContainer";
import Burger from "./Burger/Burger";
import Menu from "./Menu/Menu";
import MobileMenu from "./MobileMenu/MobileMenu";
import { StyledNavContainer } from "./NavContainer/Styled.navContainer";
import { Title } from "./Heading/Styled.heading";
import MobileMenuActive from "./mobileMenuActive/MobileMenuActive";
import { antonio, spartan } from "../../utils/fonts";
import { IPlanet, IPlanetFields } from "contentful/__generated__/types";

interface INavBarProps {
  planets: IPlanet[];
  singlePlanet?: IPlanet;
  subPage?: string;
  slug: IPlanetFields["slug"];
}
export const NavBar = ({
  planets,
  singlePlanet,
  subPage,
  slug,
}: INavBarProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const close = () => setOpen(false);
  return (
    <>
      <StyledNavContainer>
        <StyledHeader>
          <Title className={antonio.className}>THE PLANETS</Title>
          <Burger open={open} setOpen={setOpen} />
          <MobileMenuActive open={open} planets={planets} />
          <Menu className={spartan.className} planets={planets} />
        </StyledHeader>
      </StyledNavContainer>
      <MobileMenu slug={slug} subpage={subPage} />
    </>
  );
};
