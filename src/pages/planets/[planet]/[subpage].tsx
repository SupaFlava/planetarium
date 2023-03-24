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

export const getStaticProps: GetStaticProps<{}> = async ({ params }) => {
  const planets = await getPlanets();
  const planetName = params;

  const singlePlanet = await getPlanetByName(planetName?.planet);

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
