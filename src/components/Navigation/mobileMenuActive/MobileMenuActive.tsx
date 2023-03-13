import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { Cirlce } from "./StyledCircles";

const MenuActive = styled.div<{ open: boolean }>`
  background-color: #070724;
  background-image: url(/assets/background-stars.svg);
  top: 78px;
  left: 0;
  height: 150vh;
  padding-top: 44px;
  width: 99vw;
  position: absolute;
  z-index: 5;
  flex-direction: column;
  color: ${(props) => props.theme.colors.txtColor};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  transition: all 0.5s ease-in-out;

  display: ${({ open }) => (open ? "flex" : "none")};
`;

const SeperationDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
`;
const ActiveContainer = styled.div`
  max-width: 96vw;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 0 24px;
  :not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  h3 {
    color: white;
    font-family: ${(props) => props.theme.fonts.headingFont};
    font-size: 15px;
    font-weight: bold;
    line-height: 25px;
    letter-spacing: 1.36px;
  }
`;

export default function MobileMenuActive({ open, planets }: any) {
  console.log(planets);
  return (
    <MenuActive open={open}>
      {planets.map((planet: any) => (
        <ActiveContainer>
          <SeperationDiv>
            <Cirlce slug={planet.fields.slug} />
            <Link style={{ textDecoration: "none" }} href={planet.fields.slug}>
              <h3>{planet.fields.name}</h3>
            </Link>
          </SeperationDiv>
          <img src="/assets/icon-chevron.svg" />
        </ActiveContainer>
      ))}
    </MenuActive>
  );
}
