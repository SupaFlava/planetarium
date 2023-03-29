import styled from "styled-components";

export const Title = styled.h1<{ className: string }>`
  color: ${(props) => props.theme.colors.txtColor};

  font-weight: 400;
  font-size: 40px;
  /* letter-spacing: -1.05px; */
  line-height: 100%;
  vertical-align: top;
  /* margin-bottom: 16px; */
  text-transform: uppercase;
`;
