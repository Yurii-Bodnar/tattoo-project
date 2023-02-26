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
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 90px 0 30px;
  /* position: relative; */
`;
export const Container = styled.div`
  width: 50%;
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: ${(p) => p.theme.colors.transparent};
  padding: 15px;
  position: relative;
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
    width: 75%;
  }
`;
export const Title = styled.h2`
  font-family: ${(p) => p.theme.fonts.reserveSecond};
  font-size: ${(p) => p.theme.fontSizes.l};
  font-weight: ${(p) => p.theme.fontWeights.m};
  color: ${(p) => p.theme.colors.white};
  width: 100%;
`;
export const Text = styled.p`
  /* display: flex; */
  flex-direction: column;
  font-family: ${(p) => p.theme.fonts.reserve};
  font-size: ${(p) => p.theme.fontSizes.xs};
  font-weight: ${(p) => p.theme.fontWeights.s};
  color: ${(p) => p.theme.colors.white};
  /* text-align: center; */
  line-height: 1.5;
  width: 100%;
`;
export const TextAccent = styled.span`
  /* display: flex; */
  font-family: ${(p) => p.theme.fonts.reserve};
  font-size: ${(p) => p.theme.fontSizes.s};
  color: ${(p) => p.theme.colors.main};
  /* box-shadow: 2px -1px 4px 4px; */
  /* margin-bottom: 10px; */
  /* border-bottom: 1px solid ${(p) => p.theme.colors.white}; */
`;
