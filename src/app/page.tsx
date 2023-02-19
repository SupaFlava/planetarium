"use client";
import styled, { ThemeProvider } from "styled-components";
import { NavBar } from "@/components/Navigation/NavBar";
import { ImgContainer } from "@/components/MainSection/ImgContainer/Styled.ImgContainer";
import { GlobalStyles } from "@/styles/global";
import { theme } from "@/styles/theme";
import { createContext } from "react";
import { CoverImg } from "@/components/MainSection/img/Styled.CoverImg";
import { ArticleContainer } from "@/components/MainSection/ArticleContainer/Styled.ArticleContainer";
import { Para } from "@/components/MainSection/StyledParagraph/Styled.para";

import { CtaContainer } from "@/components/MainSection/CTA/Styled.CtaContainer";
import { Title } from "@/components/Navigation/Heading/Styled.heading";
import dummyImg from "../../public/assets/planet-earth.svg";
import Logo from "../../public/assets/icon-chevron.svg";
import Image from "next/image";

const Context = createContext(GlobalStyles);

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NavBar></NavBar>
      <ImgContainer>
        <CoverImg src={dummyImg.src} />
      </ImgContainer>
      <ArticleContainer>
        <Title>EARTH</Title>
        <Para>
          Third planet from the Sun and the only known planet to harbor life.
          About 29.2% of Earth's surface is land with remaining 70.8% is covered
          with water. Earth's distance from the Sun, physical properties and
          geological history have allowed life to evolve and thrive.
        </Para>
        <CtaContainer>
          Source:Wikipedia{" "}
          <svg xmlns="http://www.w3.org/2000/svg" width="12px" height="12px">
            <path fill="none" stroke="#FFF" opacity=".5" d="M1 0l4 4-4 4" />
          </svg>
        </CtaContainer>
      </ArticleContainer>
    </ThemeProvider>
  );
}
