import styled from "styled-components";
import bg from "../../assets/images/сareImg.JPG";

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
  padding-top: 90px;
  padding-bottom: 20px;
  @media screen and (max-width: 1279px) {
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
    /* height: 100%; */
  }
`;
export const Container = styled.div`
  background-color: ${(p) => p.theme.colors.transparent};
  padding: 15px;
  width: 50vw;
  @media screen and (max-width: 1279px) {
    padding: 10px;
  }
`;
export const Box = styled.div`
  background-color: ${(p) => p.theme.colors.transparent};
  padding: 15px;
  width: 50vw;
  padding-bottom: 33px;

  @media screen and (max-width: 1279px) {
    padding: 10px;
  }
`;
export const Title = styled.h2`
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
  height: 100%;
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
  text-align: center;
`;
export const AccentWord = styled.span`
  color: ${(p) => p.theme.colors.main};
`;
