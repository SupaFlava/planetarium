import styled, { Tcolor } from "styled-components";

export const Cirlce = styled.div<{ color: Tcolor }>`
  background-color: ${(props) => props.theme.colors[props.color]};
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;
