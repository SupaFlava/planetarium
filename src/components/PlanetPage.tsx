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
import { Antonio, League_Spartan } from "@next/font/google";

const antonio = Antonio({
  weight: ["400", "500"],
  subsets: ["latin"],
});
const spartan = League_Spartan({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export default function PlanetPage(props: any) {
  const {
    planets,
    singlePlanet,
    content,
    source,
    imgUrl,
    geoImg,
    subpage,
    fields,
  } = props;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {true}

      <LandingStrip className={`${antonio.className} ,${spartan.className}`}>
        <NavBar props={props}></NavBar>
        <DesktopContainer>
          <ImgContainer>
            <CoverImg src={"https:" + imgUrl} />
            {subpage === "geology" && <GeologyImg src={"https:" + geoImg} />}
          </ImgContainer>
          <MainSection
            subpage={subpage}
            content={content}
            source={source}
            name={fields.name}
            slug={fields.slug}
          ></MainSection>
        </DesktopContainer>
        <FactsContainer>
          <List fields={fields}></List>
        </FactsContainer>
      </LandingStrip>
    </ThemeProvider>
  );
}
