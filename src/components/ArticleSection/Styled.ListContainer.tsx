import styled from "styled-components";
import react from "react";

export const ListContainer = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.5);
  height: 50px;
  padding: 0 24px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 24px;
  :hover {
    background-color: ${(props) => props.theme.colors ?? [props.color]};
  }
  @media (min-width: 768px) {
    flex-direction: column;
    padding: 15px;
    justify-content: space-around;
    align-items: flex-start;

    width: 164px;
    height: 90px;
    gap: 6px;
    h2 {
      margin: 0;
    }
  }
  @media (min-width: 1440px) {
    width: 255px;
    height: 128px;
    h2 {
      font-size: 40px;
      line-height: 50px;
      letter-spacing: -2px;
      font-weight: 400;
      white-space: nowrap;
    }
  }
`;

export const SpanTxt = styled.span`
  font-family: ${(props) => props.theme.fonts.textFont};
  color: ${(props) => props.theme.colors.txtColor};

  font-size: 11px;
  font-weight: 700;
  line-height: 25px;
  opacity: 50%;
  text-transform: uppercase;
`;
export const TxtHeading = styled.h2`
  font-family: ${(props) => props.theme.fonts.headingFont};
  font-size: 20px;
  line-height: 25.88px;
  color: ${(props) => props.theme.colors.txtColor};
  text-transform: uppercase;
`;
export default function List({ props }: any) {
  const { rotation, revolution, radius, temperature } = props.singlePlanet;

  return (
    <>
      <ListContainer>
        <SpanTxt>Rotation Time</SpanTxt>
        <TxtHeading>{rotation}</TxtHeading>
      </ListContainer>
      <ListContainer>
        <SpanTxt>REVOLUTION TIME</SpanTxt>
        <TxtHeading>{revolution}</TxtHeading>
      </ListContainer>
      <ListContainer>
        <SpanTxt>Radius</SpanTxt>
        <TxtHeading>{radius}</TxtHeading>
      </ListContainer>
      <ListContainer>
        <SpanTxt>AVERAGE TEMP.</SpanTxt>
        <TxtHeading>{temperature}</TxtHeading>
      </ListContainer>
    </>
  );
}
