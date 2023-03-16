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

      <LandingStrip>
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
