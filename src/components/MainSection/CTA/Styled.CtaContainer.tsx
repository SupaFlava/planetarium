import styled from "styled-components";
import LogoIm from "../../../../public/assets/icon-chevron.svg";

const LogoC = styled.img.attrs(({ src }) => ({
  src: src,
  alt: "Article Cover",
}));
const CtaDiv = styled.div`
  width: 139px;
  opacity: 50%;
  display: flex;
  justify-content: space-between;
`;
const SourceTxt = styled.span`
  display: inline;
  font-size: 12px;
  line-height: 25px;
  font-family: ${(props) => props.theme.fonts.textFont};
  font-weight: 400;
  color: ${(props) => props.theme.colors.txtColor};
`;
const CtaTxt = styled.a`
  color: ${(props) => props.theme.colors.txtColor};
  text-decoration: underline;
`;

export const CtaContainer = () => {
  return (
    <CtaDiv>
      <SourceTxt>Source:</SourceTxt>
      <CtaTxt>Wikipedia</CtaTxt>
    </CtaDiv>
  );
};
