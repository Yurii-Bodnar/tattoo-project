import styled from "styled-components";
import bg from "../../assets/images/background.JPG";
import backgroundSmall from "../../assets/images/backgorund-small.jpg";
export const Container = styled.section`
  /* position: relative; */
`;
export const Bg = styled.div`
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
  width: 100%;

  @media screen and (max-width: 767px) {
    background-image: linear-gradient(
        to right,
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(${backgroundSmall});
  }
`;
export const Wrapper = styled.div`
  z-index: 2;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export const Logo = styled.svg`
  fill: ${(p) => p.theme.colors.white};
  width: 200px;
  height: 150px;
  @media screen and (max-width: 1279px) {
    width: 95px;
    height: 75px;
  }
  @media screen and (max-width: 768px) {
    width: 75px;
    height: 55px;
  }
`;
export const Title = styled.h1`
  font-size: ${(p) => p.theme.fontSizes.xxl};
  font-family: ${(p) => p.theme.fonts.secondary};
  letter-spacing: -10px;
  margin-right: 140px;
  font-weight: ${(p) => p.theme.fontWeights.l};
  color: ${(p) => p.theme.colors.white};

  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    left: 0;
    top: 40%;
    background-color: ${(p) => p.theme.colors.white};
    animation: runLine 1200ms cubic-bezier(0.4, 0, 0.2, 1) 0s 1 both running;
  }
  &::after {
    content: "";
    position: absolute;
    width: 50%;
    height: 2px;
    bottom: 40%;
    right: 0;
    background-color: ${(p) => p.theme.colors.white};
    animation: runLine 1200ms cubic-bezier(0.4, 0, 0.2, 1) 0s 1 both running;
  }

  @keyframes runLine {
    0% {
      width: 0;
      height: 0;
    }
    100% {
      width: 50%;
      height: 2px;
    }
  }
  @media screen and (min-width: 1280px) {
    &::before {
      top: 35%;
    }
    &::after {
      bottom: 35%;
    }
  }

  @media screen and (max-width: 1279px) {
    letter-spacing: -6px;
    margin-right: 60px;
    font-size: ${(p) => p.theme.fontSizes.xl};
  }
  @media screen and (max-width: 768px) {
    /* font-size: ${(p) => p.theme.fontSizes.xl}; */
    font-size: 28px;
    margin-right: 10px;
    letter-spacing: -3px;
  }
`;
export const BoxMobile = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  justify-content: center;
`;
export const TitleMobile = styled.h1`
  font-size: 50px;
  letter-spacing: -3px;
  display: flex;
  flex-direction: column;
  font-family: ${(p) => p.theme.fonts.secondary};
  color: ${(p) => p.theme.colors.white};
  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    left: 0;
    top: 40%;
    background-color: ${(p) => p.theme.colors.white};
    animation: runLine 1200ms cubic-bezier(0.4, 0, 0.2, 1) 0s 1 both running;
  }
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0px;
    bottom: 40%;
    right: 0;
    background-color: ${(p) => p.theme.colors.white};
    animation: runLine 1200ms cubic-bezier(0.4, 0, 0.2, 1) 0s 1 both running;
  }
  @keyframes runLine {
    0% {
      width: 0;
      height: 0;
    }
    100% {
      width: 50%;
      height: 2px;
    }
  }
`;
export const TitleHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  -webkit-clip-path: inset(100%);
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;
export const PartTitle = styled.span`
  font-size: 50px;
  font-weight: ${(p) => p.theme.fontWeights.l};
  letter-spacing: -3px;
  display: flex;
  flex-direction: column;
  font-family: ${(p) => p.theme.fonts.secondary};
  color: ${(p) => p.theme.colors.white};
`;
