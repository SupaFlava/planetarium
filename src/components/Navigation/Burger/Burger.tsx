import { useState } from "react";
import { StyledBurger } from "./Styled.Burger";

type Props = {
  open: boolean;
  setOpen: (v: boolean) => void;
};
const Burger = (props: Props) => {
  return (
    <StyledBurger open={props.open} onClick={() => props.setOpen(!props.open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
