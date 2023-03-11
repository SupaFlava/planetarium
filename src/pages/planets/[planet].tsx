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
  const { planets, singlePlanet } = props;
  const { fields } = singlePlanet[0];

  const imgUrl = fields.images[0].fields.file.url;
  console.log(fields.images[0].fields.file.url);
  const Context = createContext(GlobalStyles);
  console.log("context is ", Context);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {true}

      <LandingStrip>
        <NavBar props={props}></NavBar>
        <DesktopContainer>
          <ImgContainer>
            <CoverImg src={"https:" + imgUrl} />
          </ImgContainer>
          <MainSection fields={fields}></MainSection>
        </DesktopContainer>
        <FactsContainer>
          <List fields={fields}></List>
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
        planet: planet.fields.name.toLowerCase(),
      },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{}> = async ({ params }) => {
  console.log(params);
  const planets = await getPlanets();
  const planetName = params;

  const singlePlanet = await getPlanetByName(planetName?.planet);

  return {
    props: { planets: planets, singlePlanet: singlePlanet },
  };
  // will be passed to the page component as props
};
