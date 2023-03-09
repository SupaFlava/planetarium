import styled from "styled-components";

export const FactsContainer = styled.div`
  /* width: 327px; */
  margin: 0 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  @media (min-width: 768px) {
    flex-direction: row;
    margin: 28px 40px;
  }
  @media (min-width: 1440px) {
    margin: 0 165px 50px 165px;
  } /* top | right | bottom | left */
`;
