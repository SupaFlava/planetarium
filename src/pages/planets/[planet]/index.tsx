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
import Head from "next/head";
interface IHomeProps {
  planets: IPlanet[];
  singlePlanet: IPlanet;
  content: string;
  source: string;
  imgUrl: string;
  slug: IPlanetFields["slug"];
}
interface IPlanetPageProps extends IHomeProps {
  geoImg: string;
  subpage: string;
  name: string;
}

export default function HomePlanet({
  planets,
  singlePlanet,
  imgUrl,
  content,
  source,
  slug,
}: IHomeProps) {
  return (
    <>
      <Head>
        <title>{slug}</title>
        <meta property="og:title" content={slug} />
        <meta property="og:type" content="article" />

        <meta property="og:description" content={content} />
        <meta property="og:image" content={imgUrl} />
      </Head>
      <PlanetPage
        content={content}
        source={source}
        imgUrl={imgUrl}
        planets={planets}
        singlePlanet={singlePlanet}
        slug={slug}
      />
    </>
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

function isPlanetName(name: string): name is slug {
  return [
    "mercury",
    "earth",
    "mars",
    "venus",
    "uranus",
    "neptune",
    "saturn",
    "jupiter",
  ].includes(name);
}

export const getStaticProps: GetStaticProps<IHomeProps> = async ({
  params,
}) => {
  const planets = await getPlanets();
  const planetName = params?.planet as Params["planet"];

  if (!isPlanetName(planetName)) {
    return {
      notFound: true,
    };
  }
  const singlePlanet = planets.find(
    (planet) => planet.fields.slug === planetName
  );
  if (!singlePlanet) {
    return {
      notFound: true,
    };
  }
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

  let name = singlePlanet.fields.name;
  let imgUrl = singlePlanet.fields.images[0].fields.file.url;
  let content = singlePlanet.fields.content;
  let source = singlePlanet.fields.overviewSource;
  const fields = singlePlanet.fields;
  const slug = singlePlanet.fields.slug;
  const temperature = singlePlanet.fields.temperature;
  const rotation = singlePlanet.fields.rotation;
  const radius = singlePlanet.fields.radius;
  const revolution = singlePlanet.fields.revolution;
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
      fields,
      temperature,
      slug,
    },
  };
};
