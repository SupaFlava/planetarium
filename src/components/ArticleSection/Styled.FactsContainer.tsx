import styled from "styled-components";

export const FactsContainer = styled.div`
  /* width: 327px; */
  margin: 24px 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  @media (min-width: 768px) {
    flex-direction: row;
    margin: 28px 40px;
  }
  @media (min-width: 1440px) {
    margin: auto 165px;
  }
`;
