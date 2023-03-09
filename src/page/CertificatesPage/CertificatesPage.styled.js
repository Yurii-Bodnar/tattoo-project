import styled from "styled-components";
import bg from "../../assets/images/pictureBG.JPG";

export const Bg = styled.section`
  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100%;
  position: relative;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 90px 2.5vw 20px;
  gap: 40px;
  align-items: flex-start;
`;
export const Item = styled.li`
  display: flex;
  gap: 20px;
  background-color: ${(p) => p.theme.colors.transparent};
  position: relative;
  @media screen and (min-width: 1280px) {
    &::before {
      content: "";
      position: absolute;
      background-color: ${(p) => p.theme.colors.main};
      width: 100%;
      height: 2px;
      /* left: 31px; */
      /* top: 386px; */
      bottom: 0;
    }
  }
`;

export const Img = styled.img`
  width: 500px;
  height: 300px;
  @media screen and (max-width: 1279px) {
    width: 300px;
    height: 200px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 75%;
`;
export const Title = styled.h2`
  font-family: ${(p) => p.theme.fonts.reserveSecond};
  font-size: ${(p) => p.theme.fontSizes.l};
  font-weight: ${(p) => p.theme.fontWeights.m};
  color: ${(p) => p.theme.colors.white};
  text-align: center;
  padding-top: 20px;
`;
export const Text = styled.p`
  font-family: ${(p) => p.theme.fonts.reserve};
  font-size: ${(p) => p.theme.fontSizes.xs};
  font-weight: ${(p) => p.theme.fontWeights.s};
  color: ${(p) => p.theme.colors.white};
  padding: 10px 70px 0px;
  line-height: 1.5;
  /* background-color: red; */
`;
