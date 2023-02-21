import styled from "styled-components";
import bg from "../../assets/images/сareImg.JPG";

export const BgImg = styled.section`
  display: flex;
  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  position: relative;
  @media screen and (max-width: 1279px) {
    height: 110vh;
  }
`;
export const Container = styled.div`
  z-index: 1;
  position: absolute;
  background-color: ${(p) => p.theme.colors.transparent};
  padding: 15px;
  top: 50%;
  transform: translate(10px, -150px);
  width: 45vw;
  /* height: 360px; */
  @media screen and (max-width: 1279px) {
    width: 346px;
    height: 523px;
    top: 40%;
    padding: 10px;
    /* transform: translate(20px, -150px); */
  }
`;
export const Box = styled.div`
  z-index: 1;
  position: absolute;
  background-color: ${(p) => p.theme.colors.transparent};
  padding: 15px;
  top: 50%;
  transform: translate(10px, -150px);
  width: 45vw;
  right: 20px;
  /* height: 360px; */

  @media screen and (max-width: 1279px) {
    width: 346px;
    height: 523px;
    top: 40%;
    padding: 10px;
    /* transform: translate(-20px, -150px); */
  }
`;
export const Title = styled.h2`
  font-family: ${(p) => p.theme.fonts.reserveSecond};
  font-size: ${(p) => p.theme.fontSizes.l};
  font-weight: ${(p) => p.theme.fontWeights.m};
  color: ${(p) => p.theme.colors.white};
  text-align: center;
  /* text-align: center; */
`;
export const TitleSubText = styled.p`
  font-family: ${(p) => p.theme.fonts.reserve};
  font-size: ${(p) => p.theme.fontSizes.s};
  color: ${(p) => p.theme.colors.main};
  /* text-align: center; */
  margin-bottom: 10px;
`;
export const Text = styled.p`
  font-family: ${(p) => p.theme.fonts.reserve};
  font-size: ${(p) => p.theme.fontSizes.xs};
  font-weight: ${(p) => p.theme.fontWeights.s};
  color: ${(p) => p.theme.colors.white};
  /* text-align: center; */
`;
export const TitleText = styled.p`
  font-family: ${(p) => p.theme.fonts.reserve};
  font-size: ${(p) => p.theme.fontSizes.xs};
  font-weight: ${(p) => p.theme.fontWeights.s};
  color: ${(p) => p.theme.colors.main};
  text-align: center;
`;
export const AccentWord = styled.span`
  color: ${(p) => p.theme.colors.main};
`;
