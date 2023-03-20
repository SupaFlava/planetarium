import Link from "next/link";
import React from "react";
import styled, { Tcolor } from "styled-components";
import { StyledMobileMenu } from "./Styled.MobileMenu";

export const DivLinks = styled.div<{ color: Tcolor; isActive: boolean }>`
  border-bottom: 4px solid transparent;
  border-color: ${(props) =>
    props.isActive ? props.theme.colors[props.color] : ""};
  padding: 20px 0;
  a {
    text-decoration: none;
  }
`;

export default function MobileMenu({ props }: any) {
  const { slug, subpage, singlePlanet } = props;
  console.log(singlePlanet);
  return (
    <StyledMobileMenu>
      <DivLinks color={singlePlanet.slug} isActive={!subpage}>
        <Link href={`/planets/${singlePlanet.slug}`}>
          <span>OVERVIEW</span>
        </Link>
      </DivLinks>
      <DivLinks color={singlePlanet.slug} isActive={subpage === "surface"}>
        <Link href={`/planets/${singlePlanet.slug}/surface`}>
          <span>STRUCTURE</span>
        </Link>
      </DivLinks>
      <DivLinks color={singlePlanet.slug} isActive={subpage === "geology"}>
        <Link href={`/planets/${singlePlanet.slug}/geology`}>
          <span>SURFACE</span>
        </Link>
      </DivLinks>
    </StyledMobileMenu>
  );
}
