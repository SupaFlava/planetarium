import React from "react";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next/types";
import { NavBar } from "@/components/Navigation/NavBar";
import { getPlanetByName, getPlanets } from "apiClient/planetsApi";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "@/styles/global";
import { LandingStrip } from "@/components/Responsive/Styled.LandingStrip";
import { DesktopContainer } from "@/components/Responsive/Styled.desktopContainer";
import { ImgContainer } from "@/components/MainSection/ImgContainer/Styled.ImgContainer";
import { MainSection } from "@/components/MainSection/ArticleContainer/Styled.ArticleContainer";
import { FactsContainer } from "@/components/ArticleSection/Styled.FactsContainer";
import List from "@/components/ArticleSection/Styled.ListContainer";
import { CoverImg } from "@/components/MainSection/img/Styled.CoverImg";
import { theme } from "@/styles/theme";
import { GeologyImg } from "@/components/MainSection/img/Style.GeologyImg";

export default function Subpage(props: any) {
  const { planets, singlePlanet } = props;
  const { fields } = singlePlanet[0];

  let imgUrl = fields.images[0].fields.file.url;
  console.log(fields.images);
  let geoImg;
  const router = useRouter();
  if (router.query.subpage === "surface") {
    imgUrl = fields.images[1].fields.file.url;
  } else if (router.query.subpage === "geology") {
    geoImg = fields.images[2].fields.file.url;
  }

  // Render content for the subpage
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {true}

      <LandingStrip>
        <NavBar props={props}></NavBar>
        <DesktopContainer>
          <ImgContainer>
            <CoverImg src={"https:" + imgUrl} />
            {router.query.subpage === "geology" && (
              <GeologyImg src={"https:" + geoImg} />
            )}
          </ImgContainer>
          <MainSection fields={fields}></MainSection>
        </DesktopContainer>
        <FactsContainer>
          <List fields={fields}></List>
        </FactsContainer>
      </LandingStrip>
    </ThemeProvider>
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

  return {
    props: { planets: planets, singlePlanet: singlePlanet },
  };
};
