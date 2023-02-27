import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  background-color: ${(p) => p.theme.colors.reserve};
`;
export const Logo = styled.svg`
  width: 60px;
  height: 50px;
  fill: ${(p) => p.theme.colors.white};
`;
export const ButtonMenu = styled.button`
  border: none;
  background-color: inherit;
`;
export const ButtonIcon = styled.svg`
  width: 30px;
  height: 30px;
  fill: ${(p) => p.theme.colors.white};
`;

export const ModalContainer = styled.div`
  background-color: ${(p) => p.theme.colors.reserve};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  /* transition: transform 0.3s linear, opacity 0.25s linear; */
  /* transition: all 0.5s ease-in; */
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  
  animation: 750ms cubic-bezier(0.4, 0, 0.2, 1) translate-x;
  @keyframes translate-x {
    0% {
      opacity 0.1;
      transform: translateX(800px)  ;

    }
    100% {
      transform: translateX(0px) ;
      
    }
  }
`;
export const ButtonClose = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  top: 22px;
  right: 22px;
`;
export const ButtonCloseIcon = styled.svg`
  width: 30px;
  height: 30px;
  fill: ${(p) => p.theme.colors.white};
`;
export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;
export const Link = styled(NavLink)`
  color: ${(p) => p.theme.colors.white};
  /* font-size: ${(p) => p.theme.fontSizes.l}; */
  font-size: 25px;
  font-weight: ${(p) => p.theme.fontWeights.s};
  letter-spacing: 1.5;
  &.active {
    color: ${(p) => p.theme.colors.main};
  }
`;
