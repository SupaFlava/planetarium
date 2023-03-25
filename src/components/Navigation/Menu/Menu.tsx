import React from "react";
import { StyledMenu } from "./Styled.Menu";
import Link from "next/link";
import styled, { Tcolor } from "styled-components";
import { IPlanet, IPlanetFields } from "contentful/__generated__/types";

export const AncherDiv = styled.div<{ color: Tcolor }>`
  @media (min-width: 1440px) {
    border: 2px solid transparent;
    box-sizing: border-box;
    padding: 26px 0;
    :hover {
      border-top: 2px solid ${(props) => props.theme.colors[props.color]};
    }
  }
`;
interface IMenuProps {
  planets: IPlanet[];
  className?: string;
}
const Menu = ({ planets }: IMenuProps) => {
  return (
    <>
      <StyledMenu>
        {planets.map((planet) => (
          <AncherDiv color={planet.fields.slug} key={planet.fields.name}>
            <Link href={`/planets/${planet.fields.slug}`}>
              <span>{planet.fields.name}</span>
            </Link>
          </AncherDiv>
        ))}
      </StyledMenu>
    </>
  );
};
export default Menu;
