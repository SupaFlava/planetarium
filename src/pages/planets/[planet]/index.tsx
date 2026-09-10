
import { GetStaticPaths, GetStaticProps } from "next";
import {  getPlanets } from "apiClient/planetsApi";
import PlanetPage from "@/components/PlanetPage";
import { IPlanet, IPlanetFields } from "contentful/__generated__/types";
import { ParsedUrlQuery } from "querystring";
import { isPlanetName, PlanetSlug } from "@/utils/planetSlug";

interface IHomeProps {
  planets: IPlanet[];
  singlePlanet: IPlanet;
  content: string;
  source: string;
  imgUrl: string;
  slug: IPlanetFields["slug"];
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
      <PlanetPage
        content={content}
        source={source}
        imgUrl={imgUrl}
        planets={planets}
        singlePlanet={singlePlanet}
        slug={slug}
      />
  );
}
interface Params extends ParsedUrlQuery {
  planet: PlanetSlug;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const planets = await getPlanets();
  const paths = planets.flatMap((planet) => [
    { params: { planet: planet.fields.slug } },
  ]);

  return {
    paths,
    fallback: false,
  };
};



export const getStaticProps: GetStaticProps<IHomeProps> = async ({
  params,
}) => {
  try
  {
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
		  notFound: true
		};
	  }  
	    const { content, overviewSource: source, images, slug } = singlePlanet.fields;
		const imgUrl = images[0]?.fields.file.url;
		if(!imgUrl) {
			return {
				notFound: true
			};
		}
		return {
			props: {
			  planets,
			  singlePlanet,
			  content,
			  source,
			  imgUrl,
			  slug,
			},
		  };
		} catch (error) {
			console.error("Failed to fetch planet data:", error);
			return {notFound: true};
		}
  };
