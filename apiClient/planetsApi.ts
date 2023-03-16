import { IPlanetFields } from "@types/generated/contentful";
import { ContentfulCollection, createClient, Entry } from "contentful";

export async function getPlanets() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  const res = await client.getEntries<IPlanetFields>({
    content_type: "planet",
  });
  const planets = res.items;

  return planets;
}

export async function getPlanetByName(name: any) {
  const planets = await getPlanets();

  const result = planets.filter(
    (planet: any) => planet.fields.name.toLowerCase() === name.toLowerCase()
  );

  return result;
}
