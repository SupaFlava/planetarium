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
`;

export const SpanTxt = styled.span`
  font-family: ${(props) => props.theme.fonts.textFont};
  color: ${(props) => props.theme.colors.txtColor};

  font-size: 8px;
  line-height: 16px;
  font-weight: 700;
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
export default function List() {
  return (
    <>
      <ListContainer>
        <SpanTxt>Rotation Time</SpanTxt>
        <TxtHeading>18.8 hours</TxtHeading>
      </ListContainer>
      <ListContainer>
        <SpanTxt>REVOLUTION TIME</SpanTxt>
        <TxtHeading>29.46 years</TxtHeading>
      </ListContainer>
      <ListContainer>
        <SpanTxt>Radius</SpanTxt>
        <TxtHeading>58,232 km</TxtHeading>
      </ListContainer>
    </>
  );
}
