import fs from "fs";
import path from "path";

import { PlanetInterface } from "@/types/PlanetInterface";

import planets from "../data.json";

export async function getPlanets() {
  return planets;
}

export async function getPlanetByName(name: any) {
  console.log("this is ", name);
  const result = planets.filter(
    (planet) => planet.name.toLowerCase() === name.toLowerCase()
  );

  console.log("result is ", { result });

  return result;
}
