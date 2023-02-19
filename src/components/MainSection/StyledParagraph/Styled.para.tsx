import styled from "styled-components";

export const Para = styled.p`
  font-family: ${(props) => props.theme.fonts.textFont};
  color: ${(props) => props.theme.colors.txtColor};
  font-size: 11px;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
`;
