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
import { InferGetStaticPropsType } from "next";
import { IPlanet, IPlanetFields } from "contentful/__generated__/types";
import { ParsedUrlQuery } from "querystring";

interface IHomeProps {
  planets: IPlanet[];
  singlePlanet?: IPlanet;
  content?: string;
  source?: string;
  imgUrl?: string;
}

export default function HomePlanet(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { planets, singlePlanet, imgUrl, content, source } = props;

  return (
    <PlanetPage
      content={content}
      source={source}
      imgUrl={imgUrl}
      planets={planets}
      singlePlanet={singlePlanet}
    />
  );
}
interface Params extends ParsedUrlQuery {
  planet:
    | "mercury"
    | "earth"
    | "mars"
    | "venus"
    | "uranus"
    | "neptune"
    | "saturn"
    | "jupiter";
}
type slug = IPlanetFields["slug"];

export const getStaticPaths: GetStaticPaths = async () => {
  const planets = await getPlanets();
  const paths = planets.flatMap((planet) => [
    { params: { planet: planet.fields.slug } },
  ]);

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IHomeProps> = async ({
  params,
}) => {
  const planets = await getPlanets();
  const planetName = params?.planet;

  // function parsUrlQuery(urlQuery: string | string[] | undefined): string {
  //   if (urlQuery === undefined) {
  //     return "";
  //   }
  //   if (Array.isArray(urlQuery)) {
  //     return urlQuery.join("");
  //   }
  //   return urlQuery;
  // }

  // const singlePlanet = await getPlanetByName(planetName?.planet);
  const singlePlanet = planets.find(
    (planet) => planet.fields.slug === planetName
  );
  let name = singlePlanet?.fields.name;
  let imgUrl = singlePlanet?.fields.images[0].fields.file.url;
  let content = singlePlanet?.fields.content;
  let source = singlePlanet?.fields.overviewSource;

  // singlePlanet?.map((single) => {
  //   imgUrl = single.images[0];
  //   content = single.content;
  //   source = single.overviewSource;
  // });

  // content = singlePlanet[0].fields.content;
  // source = singlePlanet[0].fields.overviewSource;
  // imgUrl = singlePlanet[0].fields.images[0].fields.file.url;

  return {
    props: {
      planets,
      singlePlanet,
      content,
      source,
      imgUrl,
    },
  };
};
