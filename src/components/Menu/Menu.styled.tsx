import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: none;

  //DESKTOP 1440
  @media (min-width: 1440px) {
    justify-content: space-between;
  }

  //TABLET 768
  @media (min-width: 768px) {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 0 50px;
    margin-bottom: 28px;

    a {
      font-family: ${({ theme }) => theme.fonts.textFont};
      font-size: 11px;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 1px;
      color: ${({ theme }) => theme.colors.txtColor};
      text-decoration: none;
      transition: color 0.3s linear;

      &:hover {
        color: ${({ theme }) => theme.primaryHover};
      }
    }
  }
`;
