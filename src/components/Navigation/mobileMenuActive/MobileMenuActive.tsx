import { IPlanet, IPlanetFields } from "contentful/__generated__/types";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { Cirlce } from "./StyledCircles";

const MenuActive = styled.div<{ open: boolean }>`
  background-color: #070724;
  background-image: url(/assets/background-stars.svg);
  top: 78px;
  left: 0;
  height: 70%;
  padding-top: 44px;
  width: 100%;
  position: absolute;
  z-index: 5;
  flex-direction: column;
  color: ${(props) => props.theme.colors.txtColor};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  transition: all 0.5s ease-in-out;
  height: 200vh;
  gap: 25px;

  display: ${({ open }) => (open ? "flex" : "none")};

  @media (min-width: 768px) {
    display: none;
  }
`;

const SeperationDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
`;
const ActiveContainer = styled.div`
  max-width: auto;
  max-height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

export default function MobileMenuActive({
  open,
  planets,
}: {
  planets: IPlanet[];
  open: boolean;
}) {
  return (
    <MenuActive open={open}>
      {planets.map((planet) => (
        <ActiveContainer key={planet.fields.slug}>
          <SeperationDiv>
            <Cirlce color={planet.fields.slug} />

            <Link
              style={{ textDecoration: "none" }}
              href={`/planets/${planet.fields.slug}`}
            >
              <h3>{planet.fields.name}</h3>
            </Link>
          </SeperationDiv>
          <img src="/assets/icon-chevron.svg" />
        </ActiveContainer>
      ))}
    </MenuActive>
  );
}
