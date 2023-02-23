"use client";
import styled, { ThemeProvider } from "styled-components";
import { NavBar } from "@/components/Navigation/NavBar";
import { ImgContainer } from "@/components/MainSection/ImgContainer/Styled.ImgContainer";
import { GlobalStyles } from "@/styles/global";
import { theme } from "@/styles/theme";
import { createContext } from "react";
import { CoverImg } from "@/components/MainSection/img/Styled.CoverImg";
import { ArticleContainer } from "@/components/MainSection/ArticleContainer/Styled.ArticleContainer";
import { Para } from "@/components/MainSection/ArticleContainer/StyledParagraph/Styled.para";

import { CtaContainer } from "@/components/MainSection/CTA/Styled.CtaContainer";
import { Title } from "@/components/Navigation/Heading/Styled.heading";

import { FactsContainer } from "@/components/ArticleSection/Styled.FactsContainer";
import dummyImg from "../../public/assets/planet-earth.svg";
import { MainSection } from "@/components/MainSection/ArticleContainer/Styled.ArticleContainer";

import List from "@/components/ArticleSection/Styled.ListContainer";

const Context = createContext(GlobalStyles);

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NavBar></NavBar>
      <ImgContainer>
        <CoverImg src={dummyImg.src} />
      </ImgContainer>
      <MainSection></MainSection>

      <FactsContainer>
        <List></List>
      </FactsContainer>
    </ThemeProvider>
  );
}
