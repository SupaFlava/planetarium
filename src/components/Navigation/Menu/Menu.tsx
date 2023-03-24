import React from "react";
import { StyledMenu } from "./Styled.Menu";
import Link from "next/link";
import styled, { Tcolor } from "styled-components";
import { IPlanetFields } from "contentful/__generated__/types";

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

const Menu = ({ props }: any) => {
  const { planets, singlePlanet } = props;

  return (
    <>
      <StyledMenu>
        {planets.map((planet: IPlanetFields) => (
          <AncherDiv color={planet.slug} key={planet.name}>
            <Link href={`/planets/${planet.slug}`}>
              <span>{planet.name}</span>
            </Link>
          </AncherDiv>
        ))}
      </StyledMenu>
    </>
  );
};
export default Menu;
