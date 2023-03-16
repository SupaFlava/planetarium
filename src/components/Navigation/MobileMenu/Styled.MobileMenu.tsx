import styled from "styled-components";

export const StyledMobileMenu = styled.nav`
  display: flex;
  justify-content: space-around;
  gap: 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  span {
    color: ${(props) => props.theme.colors.txtColor};
    font-family: ${(props) => props.theme.fonts.textFont};
    font-size: 9px;
    font-weight: 700;
    line-height: 10px;
    text-align: center;
    text-decoration: none;
    letter-spacing: 1.93px;
    opacity: 50%;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
