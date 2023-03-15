import styled from "styled-components";

export const GeologyImg = styled.img.attrs(({ src }) => ({
  src: src,
  alt: "Article Cover",
  width: "150px",
}))`
  /* @media (max-width: 1440px) {
    display: none;
  } */
  display: none;
  @media (min-width: 1441px) {
    display: block;
    position: absolute;
    z-index: 2;
    top: 80%;
  }
`;
