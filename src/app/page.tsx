"use client";
import styled, { ThemeProvider } from "styled-components";
import { NavBar } from "@/components/Navigation/NavBar";
import { ImgContainer } from "@/components/MainSection/ImgContainer/Styled.ImgContainer";
import { GlobalStyles } from "@/styles/global";
import { theme } from "@/styles/theme";
import { createContext } from "react";
import dummyImg from "../../public/assets/planet-earth.svg";

const Context = createContext(GlobalStyles);

const Title = styled.h1`
  color: ${(props) => props.theme.colors.earthColor};
  font-family: ${(props) => props.theme.fonts.textFont};
`;
const CoverImg = styled.img.attrs(({ src }) => ({
  src: src,
  alt: "Article Cover",
}))`
  max-width: 100%;
  max-height: 100%;
`;
console.log(dummyImg);
export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NavBar></NavBar>
      <ImgContainer>
        <CoverImg src={dummyImg.src} />
      </ImgContainer>
    </ThemeProvider>
  );
}
