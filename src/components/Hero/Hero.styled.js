import styled from "styled-components";

export const SectionHero = styled.section`
  display: flex;
  justify-content: space-around;
  padding-top: ${(p) => p.theme.space.paddingTopBottom};
  padding-bottom: ${(p) => p.theme.space.paddingTopBottom};
  background-color: #494646;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 39%;
    height: 2px;
    left: 0px;
    top: 25px;
    background-color: ${(p) => p.theme.colors.main};
  }
  &::after {
    content: "";
    position: absolute;
    width: 39%;
    height: 2px;
    right: 0px;
    bottom: 25px;
    background-color: ${(p) => p.theme.colors.main};
  }
  @media screen and (max-width: 1279px) {
    padding: 55px 0;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 20px;
    padding: 50px 10px;
    justify-content: center;
    align-items: center;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  gap: 30px;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;
export const Box = styled.div`
  width: 200px;
  @media screen and (max-width: 1279px) {
    width: 170px;
  }
  @media screen and (max-width: 767px) {
    width: 35vw;
  }
`;
export const TextHero = styled.p`
  font-size: ${(p) => p.theme.fontSizes.s};
  font-family: ${(p) => p.theme.fonts.main};
  font-weight: ${(p) => p.theme.fontWeights.s};
  color: ${(p) => p.theme.colors.secondary};
  border-top: 2px solid ${(p) => p.theme.colors.white};
  padding-top: 20px;
  @media screen and (max-width: 1279px) {
    font-size: ${(p) => p.theme.fontSizes.xs};
    padding-top: 10px;
  }
  @media screen and (max-width: 767px) {
    font-size: ${(p) => p.theme.fontSizes.xs};
    width: 100%;
  }
`;

export const Img = styled.img`
  border-radius: 50%;
  height: 200px;
  width: 200px;
  @media screen and (max-width: 1279px) {
    height: 150px;
    width: 152px;
  }
  @media screen and (max-width: 767px) {
    width: 100px;
    height: 100px;
  }
`;
export const Title = styled.h2`
  font-family: ${(p) => p.theme.fonts.main};
  font-size: ${(p) => p.theme.fontSizes.l};
  font-weight: ${(p) => p.theme.fontWeights.m};
  color: ${(p) => p.theme.colors.white};
  letter-spacing: 2px;
  @media screen and (max-width: 1279px) {
    font-size: ${(p) => p.theme.fontSizes.m};
  }
  @media screen and (max-width: 767px) {
    font-size: ${(p) => p.theme.fontSizes.s};
    width: 102px;
    text-align: center;
  }
`;

export const Button = styled.button`
  width: 120px;
  height: 32px;
  border: none;
  background: ${(p) => p.theme.colors.main};
  font-family: ${(p) => p.theme.fonts.main};
  font-weight: ${(p) => p.theme.fontWeights.s};
  font-size: ${(p) => p.theme.fontSizes.xs};
  cursor: pointer;
  color: ${(p) => p.theme.colors.white};
  &:focus {
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
    transform: translate(-1%, -1%);
    background-color: ${(p) => p.theme.colors.primary};
    border: 1px solid ${(p) => p.theme.colors.main};
    color: ${(p) => p.theme.colors.white};
  }
  @media screen and (min-width: 1280px) {
    &:hover {
      transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
      transform: translate(-1%, -1%);
      background-color: ${(p) => p.theme.colors.primary};
      border: 1px solid ${(p) => p.theme.colors.main};
      color: ${(p) => p.theme.colors.white};
    }
  }
  @media screen and (max-width: 1279px) {
    width: 100px;
    height: 30px;
  }
  @media screen and (max-width: 767px) {
    width: 80px;
    height: 25px;
  }
`;
