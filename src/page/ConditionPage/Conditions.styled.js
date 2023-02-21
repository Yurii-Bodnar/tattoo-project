import styled from "styled-components";
import bg from "../../assets/images/background.JPG";

export const BgImg = styled.div`
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
`;
export const Container = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  gap: 10px;
  z-index: 1;
  position: absolute;
  background-color: ${(p) => p.theme.colors.transparent};
  padding: 15px;
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
  @media screen and (max-width: 1279px) {
    transform: translate(-21%, -42%);
    left: 30%;
  }
`;
export const Title = styled.h2`
  font-family: ${(p) => p.theme.fonts.reserveSecond};
  font-size: ${(p) => p.theme.fontSizes.l};
  font-weight: ${(p) => p.theme.fontWeights.m};
  color: ${(p) => p.theme.colors.white};
`;
export const Text = styled.p`
  font-family: ${(p) => p.theme.fonts.reserve};
  font-size: ${(p) => p.theme.fontSizes.xs};
  font-weight: ${(p) => p.theme.fontWeights.s};
  color: ${(p) => p.theme.colors.white};
  text-align: center;
  line-height: 1.5;
`;
