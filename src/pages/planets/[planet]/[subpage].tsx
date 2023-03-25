import React from "react";
import { GetStaticPaths, GetStaticProps } from "next/types";
import { getPlanetByName, getPlanets } from "apiClient/planetsApi";
import { IPlanet, IPlanetFields } from "contentful/__generated__/types";
import PlanetPage from "@/components/PlanetPage";
import { ParsedUrlQuery } from "querystring";

interface ISubpageProps {
  planets: IPlanet[];
  singlePlanet?: IPlanet;
  content?: string;
  source?: string;
  imgUrl?: string;
}
interface IPlanetPageProps extends ISubpageProps {
  geoImg?: string;
  subpage?: string;
  name?: string;
  slug?: IPlanetFields["slug"];
}

export default function Subpage(props: IPlanetPageProps) {
  const { planets, singlePlanet, imgUrl, geoImg, content, source, subpage } =
    props;

  return (
    <PlanetPage
      subpage={subpage}
      content={content}
      source={source}
      imgUrl={imgUrl}
      geoImg={geoImg}
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
export const getStaticPaths: GetStaticPaths = async () => {
  const planets = await getPlanets();
  const paths = planets.flatMap((planet) => [
    {
      params: { planet: planet.fields.slug, subpage: "geology" },
    },
    {
      params: { planet: planet.fields.slug, subpage: "surface" },
    },
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
type slug = IPlanetFields["slug"];

export const getStaticProps: GetStaticProps<{}> = async ({ params }) => {
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
  let imgUrl = singlePlanet?.fields.images[0].fields.file.url;

  // let imgUrl = singlePlanet[0].fields.images[0].fields.file.url;
  let geoImg = null;
  let content;
  let source;
  if (params?.subpage === "surface") {
    content = singlePlanet?.fields.structureContent;
    source = singlePlanet?.fields.structureSource;
    imgUrl = singlePlanet?.fields.images[1].fields.file.url;
  } else if (params?.subpage === "geology") {
    content = singlePlanet?.fields.geologyContent;
    source = singlePlanet?.fields.geologySource;
    geoImg = singlePlanet?.fields.images[2].fields.file.url;
  }

  return {
    props: {
      planets: planets,
      singlePlanet: singlePlanet,
      imgUrl: imgUrl,
      geoImg: geoImg,
      content,
      source,
      subpage: params?.subpage,
    },
  };
};
