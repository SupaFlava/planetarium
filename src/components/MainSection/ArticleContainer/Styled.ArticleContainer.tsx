import React, { Children, useState } from "react";
import styled, { Tcolor } from "styled-components";
import { Para } from "./StyledParagraph/Styled.para";
import { Title } from "@/components/Navigation/Heading/Styled.heading";
import { CtaContainer } from "../CTA/Styled.CtaContainer";
import Link from "next/link";
import { useRouter } from "next/router";

export const ArticleContainer = styled.div`
  padding: 0 24px 28px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;

    align-items: baseline;
    justify-content: space-between;
    padding: 0 40px;
    h1 {
      font-size: 48px;
      margin-bottom: 24px;
    }
    p {
      margin-bottom: 32px;
    }
  }
  @media (min-width: 1440px) {
    flex-direction: column;
    padding: 0;
    gap: 30px;
    h1 {
      font-size: 80px;
    }
  }
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 340px;
  @media (min-width: 768px) {
    align-items: flex-start;
    p {
      text-align: start;
    }
  }

  @media (min-width: 1440px) {
    max-width: 350px;
  }
`;
const BtnContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;
  }
`;

const Button = styled.button<{ color: Tcolor; isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  gap: 14px;
  width: 280px;
  text-transform: uppercase;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: ${(props) => props.theme.colors.txtColor};
  font-family: ${(props) => props.theme.fonts.textFont};
  font-size: 9px;
  font-style: bold;
  background-color: ${(props) =>
    props.isActive ? props.theme.colors[props.color] : ""};
  :hover {
    background-color: #38384f;
  }

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

  @media (min-width: 1440px) {
    width: 350px;
    font-size: 12px;
  }
`;

export const MainSection = ({ slug, name, content, source, subpage }: any) => {
  return (
    <ArticleContainer>
      <InfoDiv>
        <Title>{name}</Title>

        <Para>{content}</Para>
        <CtaContainer />
      </InfoDiv>
      <BtnContainer>
        <Link href={`/planets/${slug}`}>
          {subpage === "geology"}
          <Button isActive={!subpage} color={slug}>
            <span>01</span>
            <h3>Overview</h3>
          </Button>
        </Link>
        <Link href={`/planets/${slug}/surface`}>
          <Button isActive={subpage === "surface"} color={slug}>
            <span>02</span>
            <h3>Internal Structure</h3>
          </Button>
        </Link>
        <Link href={`/planets/${slug}/geology`}>
          <Button isActive={subpage === "geology"} color={slug}>
            <span>03</span>
            <h3>Surface Geology</h3>
          </Button>
        </Link>
      </BtnContainer>
    </ArticleContainer>
  );
};
