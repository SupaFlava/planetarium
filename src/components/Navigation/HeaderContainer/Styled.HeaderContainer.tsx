import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* 
  h1 {
    color: ${(props) => props.theme.colors.txtColor};
    font-family: ${(props) => props.theme.fonts.headingFont};

    font-weight: 500;
    font-size: 28px;
    letter-spacing: -1.05px;
    line-height: 100%;
    margin: 0;
  } */

  @media (min-width: 768px) {
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    h1 {
      margin-bottom: 40px;
    }
  }

  @media (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
  }
`;
