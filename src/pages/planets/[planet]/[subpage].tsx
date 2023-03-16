import React from "react";
import { GetStaticPaths, GetStaticProps } from "next/types";
import { getPlanetByName, getPlanets } from "apiClient/planetsApi";
import { Entry } from "contentful";

import PlanetPage from "@/components/PlanetPage";

export default function Subpage(props: any) {
  console.log("propps ", props);
  const { planets, singlePlanet, imgUrl, geoImg, content, source, subpage } =
    props;
  const { fields } = singlePlanet[0];
  console.log(geoImg, subpage);

  return (
    <PlanetPage
      subpage={subpage}
      content={content}
      source={source}
      imgUrl={imgUrl}
      geoImg={geoImg}
      fields={fields}
      planets={planets}
      singlePlanet={singlePlanet}
    />
  );
}
export const getStaticPaths: GetStaticPaths = async () => {
  const planets = await getPlanets();
  const paths = planets.flatMap((planet: any) => [
    {
      params: { planet: planet.fields.name.toLowerCase(), subpage: "geology" },
    },
    {
      params: { planet: planet.fields.name.toLowerCase(), subpage: "surface" },
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
  let imgUrl = singlePlanet[0].fields.images[0].fields.file.url;
  let geoImg = null;
  let content;
  let source;
  if (params?.subpage === "surface") {
    content = singlePlanet[0].fields.structureContent;
    source = singlePlanet[0].fields.structureSource;
    imgUrl = singlePlanet[0].fields.images[1].fields.file.url;
  } else if (params?.subpage === "geology") {
    content = singlePlanet[0].fields.geologyContent;
    source = singlePlanet[0].fields.geologySource;
    geoImg = singlePlanet[0].fields.images[2].fields.file.url;
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
