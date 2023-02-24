import styled from "styled-components";

export const CoverImg = styled.img.attrs(({ src }) => ({
  src: src,
  alt: "Article Cover",
}))`
  max-width: 51%;
  max-height: 51%;

  @media (min-width: 768px) {
    /* max-width: 40%; */
    width: auto;
  }

  @media (min-width: 1440px) {
    max-width: 100%;
  }
`;
