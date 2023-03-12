import React from "react";
import styled from "styled-components";
import { Cirlce } from "./StyledCircles";

const MenuActive = styled.div<{ open: boolean }>`
  background-color: yellow;
  top: 70px;
  left: 0;
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 1;
  padding: 10rem 0;
  flex-direction: column;
  display: ${({ open }) => (open ? "flex" : "none")};
`;

export default function MobileMenuActive({ open, planets }: any) {
  console.log(planets);
  return (
    <MenuActive open={open}>
      {planets.map((planet: any) => (
        <>
          <Cirlce slug={planet.fields.slug} />
          <h3>{planet.fields.name}</h3>
        </>
      ))}
      MobileMenuActive
    </MenuActive>
  );
}
