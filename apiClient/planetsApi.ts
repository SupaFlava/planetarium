import { createClient, Entry } from "contentful";
import { IPlanet, IPlanetFields } from "contentful/__generated__/types";

function getContentfulCredentials() {
  const space = process.env.CONTENTFUL_SPACE_ID;
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

  if (!space || !accessToken) {
    throw new Error(
      "Missing CONTENTFUL_SPACE_ID or CONTENTFUL_ACCESS_TOKEN environment variables"
    );
  }

  return { space, accessToken };
}

export async function getPlanets(): Promise<IPlanet[]> {
  const client = createClient(getContentfulCredentials());
  const response = await client.getEntries<IPlanetFields>({
    content_type: "planet",
  });

  const planets: IPlanet[] = response.items.map((item) => ({
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
  }));

  return planets;
}