import styled, { ThemeProvider } from "styled-components";
import { NavBar } from "@/components/Navigation/NavBar";
import { ImgContainer } from "@/components/MainSection/ImgContainer/Styled.ImgContainer";
import { GlobalStyles } from "@/styles/global";
import { theme } from "@/styles/theme";
// import { createContext } from "react";
import { CoverImg } from "@/components/MainSection/img/Styled.CoverImg";
import { LandingStrip } from "@/components/Responsive/Styled.LandingStrip";
import { FactsContainer } from "@/components/ArticleSection/Styled.FactsContainer";
import dummyImg from "../../public/assets/planet-saturn.svg";
import { MainSection } from "@/components/MainSection/ArticleContainer/Styled.ArticleContainer";
import List from "@/components/ArticleSection/Styled.ListContainer";
import { DesktopContainer } from "@/components/Responsive/Styled.desktopContainer";
import Planet from "@/pages/planets/[planet]";
import { GetStaticProps } from "next";
import { PlanetInterface } from "@/types/PlanetInterface";
import { getPlanets } from "apiClient/planetsApi";
import HomePlanet from "@/pages/planets/[planet]";

export default function Home(props: any) {
  return <ThemeProvider theme={theme}>{/* <HomePlanet /> */}</ThemeProvider>;
}
