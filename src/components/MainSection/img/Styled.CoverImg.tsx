import styled from "styled-components";

export const CoverImg = styled.img.attrs(({ src }) => ({
  src: src,
  alt: "Article Cover",
}))`
  max-height: 60%;
  @media (min-width: 768px) {
    /* max-width: 40%; */
    max-height: 80%;
  }

  @media (min-width: 1440px) {
    max-height: 50%;
  }
`;
