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
import { Router, useRouter } from "next/router";
import PlanetPage from "@/components/PlanetPage";

export default function HomePlanet(props: any) {
  const { planets, singlePlanet, imgUrl, content, source } = props;
  const { fields } = singlePlanet[0];

  return (
    <PlanetPage
      content={content}
      source={source}
      imgUrl={imgUrl}
      fields={fields}
      planets={planets}
      singlePlanet={singlePlanet}
    />
  );
}
export const getStaticPaths: GetStaticPaths = async () => {
  const planets = await getPlanets();
  const paths = planets.flatMap((planet: any) => [
    { params: { planet: planet.fields.name.toLowerCase() } },
  ]);

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{}> = async ({ params }) => {
  const planets = await getPlanets();
  const planetName = params;

  const singlePlanet = await getPlanetByName(planetName?.planet);
  let imgUrl = singlePlanet[0].fields.images[0].fields.file.url;
  let content;
  let source;
  content = singlePlanet[0].fields.content;
  source = singlePlanet[0].fields.overviewSource;
  imgUrl = singlePlanet[0].fields.images[0].fields.file.url;

  return {
    props: {
      planets: planets,
      singlePlanet: singlePlanet,
      content,
      source,
      imgUrl,
    },
  };
};
