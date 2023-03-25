import { IPlanet, IPlanetFields } from "contentful/__generated__/types";
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

interface ImobileMenuProps {
  subpage?: string;
  slug: IPlanetFields["slug"];
}

export default function MobileMenu({ subpage, slug }: ImobileMenuProps) {
  return (
    <StyledMobileMenu>
      <DivLinks color={slug} isActive={!subpage}>
        <Link href={`/planets/${slug}`}>
          <span>OVERVIEW</span>
        </Link>
      </DivLinks>
      <DivLinks color={slug} isActive={subpage === "surface"}>
        <Link href={`/planets/${slug}/surface`}>
          <span>STRUCTURE</span>
        </Link>
      </DivLinks>
      <DivLinks color={slug} isActive={subpage === "geology"}>
        <Link href={`/planets/${slug}/geology`}>
          <span>SURFACE</span>
        </Link>
      </DivLinks>
    </StyledMobileMenu>
  );
}
