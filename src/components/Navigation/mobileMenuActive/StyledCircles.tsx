import styled from "styled-components";

export const Cirlce = styled.div<{ slug: any }>`
  background-color: ${(props) => props.theme.colors[props.slug]};
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;
