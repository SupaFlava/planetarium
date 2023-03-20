import { createClient, Entry } from "contentful";
import { IPlanet, IPlanetFields } from "contentful/__generated__/types";

export async function getPlanets(): Promise<IPlanetFields[]> {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  const response = await client.getEntries<IPlanetFields>({
    content_type: "planet",
  });

  const items = response.items;

  const planets: IPlanetFields[] = items.map((item) => item.fields);

  return planets;
}

export async function getPlanetByName(name: any) {
  const planets: IPlanetFields[] = await getPlanets();

  const result = planets.find(
    (planet: any) => planet.name.toLowerCase() === name.toLowerCase()
  );

  return result;
}
