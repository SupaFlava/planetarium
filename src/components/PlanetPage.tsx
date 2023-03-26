import styled, { ThemeProvider } from "styled-components";
import { NavBar } from "@/components/Navigation/NavBar";
import { ImgContainer } from "@/components/MainSection/ImgContainer/Styled.ImgContainer";
import { GlobalStyles } from "@/styles/global";
import { theme } from "@/styles/theme";
import { CoverImg } from "@/components/MainSection/img/Styled.CoverImg";
import { LandingStrip } from "@/components/Responsive/Styled.LandingStrip";
import { FactsContainer } from "@/components/ArticleSection/Styled.FactsContainer";
import { MainSection } from "@/components/MainSection/ArticleContainer/Styled.ArticleContainer";
import List from "@/components/ArticleSection/Styled.ListContainer";
import { DesktopContainer } from "@/components/Responsive/Styled.desktopContainer";
import { GeologyImg } from "./MainSection/img/Style.GeologyImg";
import { IPlanet, IPlanetFields } from "contentful/__generated__/types";
import Head from "next/head";

interface IPlanetPageProps {
  planets: IPlanet[];
  singlePlanet: IPlanet;
  content: string;
  source: string;
  imgUrl: string;
  geoImg?: string;
  subpage?: string;
  slug: IPlanetFields["slug"];
}

export default function PlanetPage(props: IPlanetPageProps) {
  const {
    planets,
    singlePlanet,
    content,
    source,
    imgUrl,
    geoImg,
    subpage,
    slug,
  } = props;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {true}

      <LandingStrip>
        <Head>
          <meta property="og:title" content={slug} />
          <meta property="og:type" content="article" />

          <meta property="og:description" content={content} />
          <meta property="og:image" content={imgUrl} />
          <meta property="og:image:type" content="image/svg" />
          <meta property="og:image:width" content="400" />
          <meta property="og:image:height" content="300" />
        </Head>
        <NavBar
          subPage={subpage}
          singlePlanet={singlePlanet}
          planets={planets}
          slug={slug}
        ></NavBar>
        <DesktopContainer>
          <ImgContainer>
            <CoverImg src={"https:" + imgUrl} />
            {subpage === "geology" && <GeologyImg src={"https:" + geoImg} />}
          </ImgContainer>
          <MainSection
            subpage={subpage}
            content={content}
            source={source}
            slug={slug}
            singlePlanet={singlePlanet}
          ></MainSection>
        </DesktopContainer>
        <FactsContainer>
          <List singlePlanet={singlePlanet}></List>
        </FactsContainer>
      </LandingStrip>
    </ThemeProvider>
  );
}
