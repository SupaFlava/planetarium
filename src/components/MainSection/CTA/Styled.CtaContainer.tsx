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
  img {
    width: 12px;
    height: 12px;
    align-self: center;
  }
`;
const SourceTxt = styled.span`
  display: inline;
  font-size: 12px;
  font-weight: 100;
  letter-spacing: 0.5px;

  line-height: 25px;
  font-family: ${(props) => props.theme.fonts.textFont};
  color: ${(props) => props.theme.colors.txtColor};
`;
const CtaTxt = styled.a`
  color: ${(props) => props.theme.colors.txtColor};
  text-decoration: underline;
`;

export const CtaContainer = () => {
  return (
    <CtaDiv>
      <SourceTxt>Source :</SourceTxt>
      <CtaTxt>Wikipedia</CtaTxt>
      <img src="/assets/icon-source.svg" />{" "}
    </CtaDiv>
  );
};
