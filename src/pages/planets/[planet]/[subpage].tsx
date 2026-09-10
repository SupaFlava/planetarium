import React from "react";
import { GetStaticPaths, GetStaticProps } from "next/types";
import { getPlanets } from "apiClient/planetsApi";
import { IPlanet } from "contentful/__generated__/types";
import PlanetPage from "@/components/PlanetPage";
import { ParsedUrlQuery } from "querystring";
import { isPlanetName, PlanetSlug } from "@/utils/planetSlug";

interface IPlanetPageProps {
  planets: IPlanet[];
  singlePlanet: IPlanet;
  content: string;
  source: string;
  imgUrl: string;
  geoImg: string | null;
  subpage: string;
  slug: PlanetSlug;
}

export default function Subpage(props: IPlanetPageProps) {
  const {
    planets,
    singlePlanet,
    imgUrl,
    geoImg,
    content,
    source,
    subpage,
    slug,
  } = props;

  return (
    <PlanetPage
      slug={slug}
      subpage={subpage}
      content={content}
      source={source}
      imgUrl={imgUrl}
      geoImg={geoImg ?? undefined}
      planets={planets}
      singlePlanet={singlePlanet}
    />
  );
}

interface Params extends ParsedUrlQuery {
  planet: PlanetSlug;
  subpage: "geology" | "surface";
}

export const getStaticPaths: GetStaticPaths = async () => {
  const planets = await getPlanets();
  const paths = planets.flatMap((planet) => [
    { params: { planet: planet.fields.slug, subpage: "geology" } },
    { params: { planet: planet.fields.slug, subpage: "surface" } },
  ]);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IPlanetPageProps> = async ({
  params,
}) => {
  try {
    const planets = await getPlanets();
    const planetName = params?.planet as Params["planet"];
    const subpage = params?.subpage as Params["subpage"];

    if (!isPlanetName(planetName)) {
      return { notFound: true };
    }

    const singlePlanet = planets.find(
      (planet) => planet.fields.slug === planetName
    );
    if (!singlePlanet) {
      return { notFound: true };
    }

    const { images, slug } = singlePlanet.fields;
    let imgUrl = images[0]?.fields.file.url;
    let geoImg: string | null = null;
    let content: string;
    let source: string;

    if (subpage === "surface") {
      content = singlePlanet.fields.structureContent;
      source = singlePlanet.fields.structureSource;
      imgUrl = images[1]?.fields.file.url ?? imgUrl;
    } else if (subpage === "geology") {
      content = singlePlanet.fields.geologyContent;
      source = singlePlanet.fields.geologySource;
      geoImg = images[2]?.fields.file.url ?? null;
    } else {
      return { notFound: true };
    }

    if (!imgUrl) {
      return { notFound: true };
    }

    return {
      props: {
        planets,
        singlePlanet,
        imgUrl,
        geoImg,
        content,
        source,
        slug,
        subpage,
      },
    };
  } catch (error) {
    console.error("Failed to fetch planet subpage data:", error);
    return { notFound: true };
  }
};