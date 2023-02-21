import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MainHeader = styled.header`
  /* background: transparent;

  position: fixed;
  width: 100vw;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  overflow-y: auto;
  align-items: flex-start;
  z-index: 10; */
`;
export const Backdrop = styled.div`
  position: fixed;
  top: 10px;
  z-index: 10;
  width: 95%;
  right: 2.5%;
  margin: 0 auto;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 69px;
  background-color: ${(p) => p.theme.colors.reserve};

  opacity: 0.8;
  @media screen and (max-width: 1279px) {
    padding: 0px 15px;
    justify-content: center;
  }
`;
export const Logo = styled(NavLink)``;
export const LogoIcon = styled.svg`
  fill: ${(p) => p.theme.colors.white};
  height: 50px;
  width: 65px;
  padding-right: 20px;
  @media screen and (max-width: 1279px) {
    padding-right: 10px;
  }
`;
export const MainWrap =styled.div`
display: flex;
`
export const Nav = styled.nav`
  display: flex;
  gap: 125px;
  @media screen and (max-width: 1279px) {
    gap: 40px;
  }
`;
export const Link = styled(NavLink)`
  color: ${(p) => p.theme.colors.white};
  font-family: ${(p) => p.theme.fonts.main};
  font-size: ${(p) => p.theme.fontSizes.xs};
  font-weight: ${(p) => p.theme.fontWeights.m};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  position: relative;
  &.active {
    color: ${(p) => p.theme.colors.main};
  }
  @media screen and (min-width: 1280px) {
    &::after {
      display: block;
      position: absolute;
      left: 0;
      width: 0;
      height: 1.5px;
      /* bottom: 0%; */
      background-color: #fff;
      content: "";
      transition: width 0.3s ease-out;
    }
    &:hover::after {
      color: ${(p) => p.theme.colors.main};
      width: 100%;
    }
  }
`;
export const MastersWraps = styled.div`
  /* display: flex;
  align-items: center; */
`;
export const LinkMasters = styled.button`
  position: relative;
  background-color: transparent;
  border: none;
  color: ${(p) => p.theme.colors.white};
  font-family: ${(p) => p.theme.fonts.main};
  font-size: ${(p) => p.theme.fontSizes.xs};
  font-weight: ${(p) => p.theme.fontWeights.m};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  position: relative;
  cursor: pointer;
  display: flex;
  gap: 5px;
  /* flex-direction: column; */
  @media screen and (min-width: 1280px) {
    &::after {
      display: block;
      position: absolute;
      left: 0;
      width: 0;
      height: 1.5px;
      bottom: 0%;
      background-color: #fff;
      content: "";
      transition: width 0.3s ease-out;
    }
    &:hover::after {
      color: ${(p) => p.theme.colors.main};
      width: 100%;
    }
    &:focus:hover::after {
      color: ${(p) => p.theme.colors.main};
      width: 0;
    }
  }
`;
export const SvgOpenClose = styled.svg`
  width: 17px;
  height: 17px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  fill: ${(p) => p.theme.colors.white};
`;
export const LinkWrapper = styled.div`
  gap: 125px;
  display: flex;
  @media screen and (max-width: 1279px) {
    gap: 40px;
  }
`;
