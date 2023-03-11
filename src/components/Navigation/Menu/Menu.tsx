import React from "react";
import { StyledMenu } from "./Styled.Menu";
import Link from "next/link";
import styled from "styled-components";

export const AncherSpan = styled.span`
  :hover {
    border-top: 3px solid ${(props) => props.theme.colors[props.color]};
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
          <Link href={planet.fields.slug} key={planet.sys.id}>
            <AncherSpan color={slug}>{planet.fields.name}</AncherSpan>
          </Link>
        ))}
      </StyledMenu>
    </>
  );
};
export default Menu;
