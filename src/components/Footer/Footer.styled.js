import styled from "styled-components";

export const FooterWrap = styled.footer`
  background-color: ${(p) => p.theme.colors.secondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  @media screen and (max-width: 1279px) {
    justify-content: center;
    gap: 30px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 90px;
  @media screen and (max-width: 1279px) {
    padding-left: 0;
  }
`;
export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  /* flex-direction: column; */
  gap: 10px;
  justify-content: center;
  padding-bottom: 5px;
`;
export const LogoTitle = styled.h2`
  color: ${(p) => p.theme.colors.white};
  font-size: ${(p) => p.theme.fontSizes.l};
  font-weight: ${(p) => p.theme.fontWeights.l};
  font-family: ${(p) => p.theme.fonts.secondary};
  padding-right: 5px;
  @media screen and (max-width: 1279px) {
    font-size: ${(p) => p.theme.fontSizes.m};
  }
`;
export const LogoIcon = styled.svg`
  width: 70px;
  height: 45px;
  fill: ${(p) => p.theme.colors.white};
  @media screen and (max-width: 1279px) {
    width: 50px;
    height: 35px;
  }
`;
export const MapWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const MapLink = styled.a`
  color: ${(p) => p.theme.colors.white};
  font-size: ${(p) => p.theme.fontSizes.xs};
  font-weight: ${(p) => p.theme.fontWeights.s};
  font-family: ${(p) => p.theme.fonts.main};
  padding-left: 5px;
  padding-bottom: 40px;
  @media screen and (max-width: 1279px) {
    padding-bottom: 30px;
  }

  @media screen and (min-width: 1280px) {
    &:hover {
      transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
      color: ${(p) => p.theme.colors.main};
    }
  }
`;
export const Box = styled.div`
  display: flex;
  gap: 50px;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
export const TitleName = styled.h2`
  color: ${(p) => p.theme.colors.white};

  font-size: ${(p) => p.theme.fontSizes.s};
  font-weight: ${(p) => p.theme.fontWeights.s};
  font-family: ${(p) => p.theme.fonts.main};
  @media screen and (max-width: 1279px) {
    font-size: ${(p) => p.theme.fontSizes.xs};
  }
`;
export const TelLink = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${(p) => p.theme.colors.white};
  font-size: ${(p) => p.theme.fontSizes.xs};
  /* font-weight: ${(p) => p.theme.fontWeights.s}; */
  font-family: ${(p) => p.theme.fonts.main};

  @media screen and (min-width: 1280px) {
    &:hover {
      transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
      color: ${(p) => p.theme.colors.main};
    }
  }
`;
export const TelIcon = styled.svg`
  width: 15px;
  height: 15px;
  fill: ${(p) => p.theme.colors.white};
`;
export const List = styled.ul`
  display: flex;
  gap: 10px;
`;
export const LinkSocial = styled.a`
  /* border: 1px solid #fff; */
  border-radius: 50%;
  background-color: ${(p) => p.theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  &:hover {
    background-color: ${(p) => p.theme.colors.main};
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
    transform: translate(-1%, -1%);
  }
`;
export const SocialSvg = styled.svg`
  width: 15px;
  height: 15px;
`;
