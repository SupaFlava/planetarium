import { IPlanetFields } from "contentful/__generated__/types";

export type PlanetSlug = IPlanetFields["slug"];

const PLANET_SLUGS: PlanetSlug[] = [
  "mercury",
  "earth",
  "mars",
  "venus",
  "uranus",
  "neptune",
  "saturn",
  "jupiter",
];

export function isPlanetName(name: string): name is PlanetSlug {
  return PLANET_SLUGS.includes(name as PlanetSlug);
}