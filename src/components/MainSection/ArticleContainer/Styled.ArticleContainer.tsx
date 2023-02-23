import React from "react";
import styled from "styled-components";
import { Para } from "./StyledParagraph/Styled.para";
import { Title } from "@/components/Navigation/Heading/Styled.heading";

export const ArticleContainer = styled.div`
  padding: 0 24px 28px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 40px;
  }
`;

const InfoDiv = styled.div`
  width: 339px;
`;
const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 14px;
  width: 280px;
  text-transform: uppercase;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: ${(props) => props.theme.colors.txtColor};
  font-family: ${(props) => props.theme.fonts.textFont};
  font-size: 9px;
  font-style: bold;

  span {
    margin-left: 20px;
    font-weight: 700;
    line-height: 25px;
    opacity: 50%;
    font-weight: bold;
  }
  h3 {
    letter-spacing: 2px;
    line-height: 25px;
  }
`;

export const MainSection = () => {
  return (
    <ArticleContainer>
      <InfoDiv>
        <Title>EARTH</Title>

        <Para>
          Third planet from the Sun and the only known planet to harbor life.
          About 29.2% of Earth's surface is land with remaining 70.8% is covered
          with water. Earth's distance from the Sun, physical properties and
          geological history have allowed life to evolve and thrive.
        </Para>
      </InfoDiv>
      <BtnContainer>
        <Button>
          <span>01</span>
          <h3>Overview</h3>
        </Button>
        <Button>
          <span>02</span>
          <h3>Internal Structure</h3>
        </Button>
        <Button>
          <span>03</span>
          <h3>Surface Geology</h3>
        </Button>
      </BtnContainer>
    </ArticleContainer>
  );
};
