import styled from "styled-components";

export const StylednavContainer = styled.div`
  padding: 16px 24px;
  border-bottom: 1px solid ${(props) => props.theme.colors.mercuryColor};
  @media (min-width: 1440px) {
    padding: 22px 32px;
  }
`;
