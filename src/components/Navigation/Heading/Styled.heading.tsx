import styled from "styled-components";

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.txtColor};
  font-family: ${(props) => props.theme.fonts.headingFont};

  font-weight: 500;
  font-size: 28px;
  letter-spacing: -1.05px;
  line-height: 100%;
  margin: 0;
  margin-bottom: 16px;
`;
