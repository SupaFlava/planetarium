import { createClient, Entry } from "contentful";
import { IPlanet, IPlanetFields } from "contentful/__generated__/types";

export async function getPlanets(): Promise<IPlanet[]> {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  const response = await client.getEntries<IPlanetFields>({
    content_type: "planet",
  });

  const planets: IPlanet[] = response.items.map((item) => {
    return {
      ...item,
      sys: {
        ...item.sys,
        contentType: {
          sys: {
            id: "planet",
            linkType: "ContentType",
            type: "Link",
          },
        },
      },
    };
  });

  // const planets: IPlanetFields[] = items.map((item) => item.fields);

  return planets;
}

export async function getPlanetByName(name: string) {
  const planets = await getPlanets();

  const result = planets.find(
    (planet) => planet.fields.name.toLowerCase() === name.toLowerCase()
  );

  return result;
}
