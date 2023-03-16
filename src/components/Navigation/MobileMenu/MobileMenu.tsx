import Link from "next/link";
import React from "react";
import styled, { Tcolor } from "styled-components";
import { StyledMobileMenu } from "./Styled.MobileMenu";

export const DivLinks = styled.div<{ color: Tcolor; isActive: boolean }>`
  border-bottom: 4px solid transparent;
  border-color: ${(props) =>
    props.isActive ? props.theme.colors[props.color] : ""};
  padding: 20px 0;
`;

export default function MobileMenu({ props }: any) {
  const { fields, subpage } = props;
  console.log(fields);
  return (
    <StyledMobileMenu>
      <DivLinks color={fields.slug} isActive={!subpage}>
        <Link href={`/planets/${fields.slug}`}>
          <span>OVERVIEW</span>
        </Link>
      </DivLinks>
      <DivLinks color={fields.slug} isActive={subpage === "surface"}>
        <Link href={`/planets/${fields.slug}/surface`}>
          <span>STRUCTURE</span>
        </Link>
      </DivLinks>
      <DivLinks color={fields.slug} isActive={subpage === "geology"}>
        <Link href={`/planets/${fields.slug}/geology`}>
          <span>SURFACE</span>
        </Link>
      </DivLinks>
    </StyledMobileMenu>
  );
}
