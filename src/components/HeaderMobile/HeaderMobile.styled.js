import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  background-color: ${(p) => p.theme.colors.reserve};
  /* transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1); */
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
  /* display: flex; */
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100vh;

  top: 0;
  left: 0;
  /* width: ${({ open }) => (open ? "100vw" : "0")};
  height: ${({ open }) => (open ? "100vh" : "0")}; */
  z-index: ${({ open }) => (open ? "1000" : "0")};
  /* transition: all 0.3s; */
  transition: 400ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${({ open }) => (open ? " 0.9" : "0")};
  transform: ${({ open }) => (open ? "translateX(0%) " : "translateX(800px)")};
`;
export const ButtonClose = styled.button`
  /* width: ${({ open }) => !open && "0"};
  height: ${({ open }) => !open && "0"}; */
  background-color: transparent;
  border: none;
  position: absolute;
  top: 22px;
  right: 22px;
`;
export const ButtonCloseIcon = styled.svg`
  /* width: ${({ open }) => (open ? "30px" : "0px")};
  height: ${({ open }) => (open ? "30px" : "0px")}; */
  width: 30px;
  height: 30px;
  fill: ${(p) => p.theme.colors.white};
`;
export const Nav = styled.nav`
  /* width: ${({ open }) => (open ? "auto" : "0px")};
  height: ${({ open }) => (open ? "auto" : "0px")}; */
`;
export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  /* width: ${({ open }) => (open ? "auto" : "0px")};
  height: ${({ open }) => (open ? "auto" : "0px")}; */
`;
export const Item = styled.li`
  /* width: ${({ open }) => (open ? "auto" : "0px")};
  height: ${({ open }) => (open ? "auto" : "0px")}; */
`;
export const Link = styled(NavLink)`
  color: ${(p) => p.theme.colors.white};
  /* font-size: ${(p) => p.theme.fontSizes.l}; */
  font-size: 25px;
  font-weight: ${(p) => p.theme.fontWeights.s};
  letter-spacing: 1.5;
  /* width: ${({ open }) => (open ? "auto" : "0px")};
  height: ${({ open }) => (open ? "auto" : "0px")}; */
  &.active {
    color: ${(p) => p.theme.colors.main};
  }
`;
