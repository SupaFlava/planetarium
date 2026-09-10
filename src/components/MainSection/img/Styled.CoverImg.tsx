import styled from "styled-components";

export const CoverImg = styled.img.attrs(({ src }) => ({
  src: src,
  alt: "Article Cover",
}))`
  max-height: 60%;
  max-width: 100%;

  @media (min-width: 768px) {
    max-width: 80%; */
    max-height: 100%;
  }

  @media (min-width: 1440px) {
    max-height: 50%;
	max-width: 100%;
  }
`;
