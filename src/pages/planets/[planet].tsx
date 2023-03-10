import styled, { ThemeProvider } from "styled-components";
import { NavBar } from "@/components/Navigation/NavBar";
import { ImgContainer } from "@/components/MainSection/ImgContainer/Styled.ImgContainer";
import { GlobalStyles } from "@/styles/global";
import { theme } from "@/styles/theme";
import { CoverImg } from "@/components/MainSection/img/Styled.CoverImg";
import { LandingStrip } from "@/components/Responsive/Styled.LandingStrip";
import { FactsContainer } from "@/components/ArticleSection/Styled.FactsContainer";
import { MainSection } from "@/components/MainSection/ArticleContainer/Styled.ArticleContainer";
import List from "@/components/ArticleSection/Styled.ListContainer";
import { DesktopContainer } from "@/components/Responsive/Styled.desktopContainer";
import { createContext } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { PlanetInterface } from "@/types/PlanetInterface";
import { getPlanetByName, getPlanets } from "apiClient/planetsApi";

export default function HomePlanet(props: any) {
  const planetImg = props.singlePlanet[0].images.planet;
  const Context = createContext(GlobalStyles);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {true}

      <LandingStrip>
        <NavBar></NavBar>
        <DesktopContainer>
          <ImgContainer>
            <CoverImg src={`../../../.${planetImg}`} />
          </ImgContainer>
          <MainSection planet={props.singlePlanet}></MainSection>
        </DesktopContainer>
        <FactsContainer>
          <List></List>
        </FactsContainer>
      </LandingStrip>
    </ThemeProvider>
  );
}
export const getStaticPaths: GetStaticPaths = async () => {
  const planets = await getPlanets();
  const paths = planets.map((planet: any) => {
    return {
      params: {
        planet: planet.name.toLowerCase(),
      },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  objectData: PlanetInterface;
}> = async ({ params }) => {
  console.log(params);
  const objectData: PlanetInterface = await getPlanets();
  const planetName = params;

  const singlePlanet: PlanetInterface = await getPlanetByName(
    planetName?.planet
  );

  return {
    props: { objectData: objectData, singlePlanet: singlePlanet },
  };
  // will be passed to the page component as props
};
