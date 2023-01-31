import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MainHeader = styled.header`
  /* position: absolute; */
  /* top: 0; */
  /* left: 0; */
  margin-left: auto;
  margin-right: auto;
  position: sticky;
  top: 0px;
  z-index: 10;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 16px;
  background-color: #272727;
  justify-content: space-between;
`;
export const Logo = styled(NavLink)``;
export const LogoText = styled.p`
  font-size: 40px;
  font-weight: 700;
  color: #fff;
`;
export const Nav = styled.nav`
  display: flex;
  gap: 40px;
`;
export const Link = styled(NavLink)`
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  &.active {
    color: red;
  }
`;
