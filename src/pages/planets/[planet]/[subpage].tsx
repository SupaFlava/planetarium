import React from "react";
import { GetStaticPaths, GetStaticProps } from "next/types";
import { getPlanetByName, getPlanets } from "apiClient/planetsApi";

import PlanetPage from "@/components/PlanetPage";

export default function Subpage(props: any) {
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
export const getStaticPaths: GetStaticPaths = async () => {
  const planets = await getPlanets();
  const paths = planets.flatMap((planet: any) => [
    {
      params: { planet: planet.name.toLowerCase(), subpage: "geology" },
    },
    {
      params: { planet: planet.name.toLowerCase(), subpage: "surface" },
    },
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

  let imgUrl = singlePlanet?.images[0].fields.file.url;

  // let imgUrl = singlePlanet[0].fields.images[0].fields.file.url;
  let geoImg = null;
  let content;
  let source;
  if (params?.subpage === "surface") {
    content = singlePlanet?.structureContent;
    source = singlePlanet?.structureSource;
    imgUrl = singlePlanet?.images[1].fields.file.url;
  } else if (params?.subpage === "geology") {
    content = singlePlanet?.geologyContent;
    source = singlePlanet?.geologySource;
    geoImg = singlePlanet?.images[2].fields.file.url;
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
