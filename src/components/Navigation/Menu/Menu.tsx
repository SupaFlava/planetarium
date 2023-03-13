import React from "react";
import { StyledMenu } from "./Styled.Menu";
import Link from "next/link";
import styled, { Tcolor } from "styled-components";

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

  const { slug } = singlePlanet[0].fields;

  console.log(singlePlanet);
  return (
    <>
      <StyledMenu>
        {planets.map((planet: any) => (
          <AncherDiv color={slug}>
            <Link href={planet.fields.slug} key={planet.sys.id}>
              <span>{planet.fields.name}</span>
            </Link>
          </AncherDiv>
        ))}
      </StyledMenu>
    </>
  );
};
export default Menu;
