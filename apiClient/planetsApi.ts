import { createClient } from "contentful";
import planets from "../data.json";

export async function getPlanets() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  const res = await client.getEntries({ content_type: "planet" });
  const maybePlanets = res.items;
  console.log(
    "result isssssss ",
    maybePlanets.map((planet) => planet.fields.rotation)
  );

  return planets;
}

export async function getPlanetByName(name: any) {
  const result = planets.filter(
    (planet) => planet.name.toLowerCase() === name.toLowerCase()
  );

  return result;
}
