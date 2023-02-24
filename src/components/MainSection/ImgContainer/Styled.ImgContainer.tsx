import styled from "styled-components";

export const ImgContainer = styled.div`
  border: none;
  /* max-width: 100vw; */
  height: 304px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    height: 460px;
  }
  @media (min-width: 1440px) {
    width: 400px;
    height: auto;
    padding: 0;
  }
`;
