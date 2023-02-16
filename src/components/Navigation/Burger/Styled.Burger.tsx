import styled from "styled-components";

export const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  &:focus {
    outline: none;
  }

  div {
    width: 24px;
    height: 3px;
    background: ${({ theme }) => theme.colors.txtColor};
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
