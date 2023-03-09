import styled from "styled-components";
import bg from "../../assets/images/сareImg.JPG";
import bgSmall from "../../assets/images/backgroundSmallDollar.jpg";

export const BgImg = styled.section`
  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  /* height: 100vh; */
  position: relative;
  padding-top: 30vh;
  padding-bottom: 50vh;
  @media screen and (max-width: 1279px) {
    padding-top: 10vh;
  }
  @media screen and (max-width: 767px) {
    background-image: linear-gradient(
        to right,
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(${bgSmall});
    padding: 5vh 0;
    /* padding: 10vh 10px 20vh 10px; */
  }
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 0 30px 0px 30px;
  @media screen and (max-width: 1279px) {
    flex-direction: column;
    height: 100%;
    /* height: 100%; */
  }
  @media screen and (max-width: 767px) {
    /* padding: 0px; */
    height: 100%;
  }
`;
export const Container = styled.div`
  background-color: ${(p) => p.theme.colors.transparent};
  padding: 15px;
  width: 70vw;
  height: 100%;

  @media screen and (min-width: 1279px) {
    padding: 15px;
    height: 450px;
  }
`;
export const Box = styled.div`
  background-color: ${(p) => p.theme.colors.transparent};
  padding: 15px;
  width: 70vw;
  height: 100%;

  /* padding-bottom: 33px; */

  @media screen and (min-width: 1279px) {
    padding: 15px;
    height: 450px;
  }
`;
export const Title = styled.h2`
  display: block;
  font-family: ${(p) => p.theme.fonts.reserveSecond};
  font-size: ${(p) => p.theme.fontSizes.l};
  font-weight: ${(p) => p.theme.fontWeights.m};
  color: ${(p) => p.theme.colors.white};
  line-height: 1.5;
  text-align: center;
  width: 100%;
`;
export const TitleSubText = styled.p`
  font-family: ${(p) => p.theme.fonts.reserve};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: 1.5;
  color: ${(p) => p.theme.colors.main};
  width: 100%;

  margin-bottom: 10px;
`;
export const Text = styled.p`
  font-family: ${(p) => p.theme.fonts.reserve};
  font-size: ${(p) => p.theme.fontSizes.xs};
  font-weight: ${(p) => p.theme.fontWeights.s};
  line-height: 1.5;
  color: ${(p) => p.theme.colors.white};

  /* text-align: center; */
`;
export const TitleText = styled.p`
  font-family: ${(p) => p.theme.fonts.reserve};
  font-size: ${(p) => p.theme.fontSizes.xs};
  font-weight: ${(p) => p.theme.fontWeights.s};
  color: ${(p) => p.theme.colors.main};
  text-align: center; ;
`;
export const AccentWord = styled.span`
  color: ${(p) => p.theme.colors.main};
`;
