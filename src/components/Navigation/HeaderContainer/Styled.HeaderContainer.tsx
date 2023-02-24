import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

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
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
    gap: 600px;
    white-space: nowrap;
  }
`;
