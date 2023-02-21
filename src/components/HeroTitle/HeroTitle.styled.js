import styled from "styled-components";
import bg from "../../assets/images/background.JPG";

export const Container = styled.section`
  position: relative;
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
  height: 90vh;
  /* filter: blur(7px); */
  position: relative;
`;
export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    content: "";
    position: absolute;
    width: 50%;
    height: 2px;
    left: 0;
    top: -25px;
    background-color: ${(p) => p.theme.colors.white};
  }
  &::after {
    content: "";
    position: absolute;
    width: 50%;
    height: 2px;
    bottom: -25px;
    right: 0;
    background-color: ${(p) => p.theme.colors.white};
  }
`;
export const Logo = styled.svg`
  fill: ${(p) => p.theme.colors.white};
  width: 200px;
  height: 150px;
  @media screen and (max-width: 1279px) {
    width: 95px;
    height: 75px;
  }
`;
export const Title = styled.h1`
  font-size: ${(p) => p.theme.fontSizes.xxl};
  font-family: ${(p) => p.theme.fonts.secondary};
  letter-spacing: -10px;
  margin-right: 140px;
  font-weight: ${(p) => p.theme.fontWeights.l};
  color: ${(p) => p.theme.colors.white};
  @media screen and (max-width: 1279px) {
    letter-spacing: -6px;
    margin-right: 60px;
    font-size: ${(p) => p.theme.fontSizes.xl};
  }
`;
