import styled from "styled-components";

export const ImgContainer = styled.div`
  height: 304px;
  display: flex;

  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: column;
    height: 460px;
  }
  @media (min-width: 1440px) {
    width: 400px;
    height: auto;
    padding: 0;
  }
`;
