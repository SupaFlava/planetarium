import React from "react";
import { StyledMenu } from "./Menu.styled";

const Menu = () => {
  return (
    <StyledMenu>
      <a href="/">
        <span role="img" aria-label="about us"></span>
        MERCURY
      </a>
      <a href="/">VERNUS</a>
      <a href="/">EARTH</a>
      <a href="/">MARS</a>
      <a href="/">JUPITER</a>
      <a href="/">SATURN</a>
      <a href="/">URANUS</a>
      <a href="/">NEPTUNE</a>
    </StyledMenu>
  );
};
export default Menu;
