import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 90px;
  top: 35px;
  background: #585454;
  height: 48px;
  z-index: 2;
`;
export const Box = styled.div`
  position: absolute;
  top: 35px;
  display: flex;
  flex-direction: column;
  height: 45px;
  width: 89px;
  /* left: 326px; */
  z-index: 3;
`;
export const Text = styled.div`
  color: ${(p) => p.theme.colors.white};
  font-family: ${(p) => p.theme.fonts.main};
  font-size: ${(p) => p.theme.fontSizes.xs};
  font-weight: ${(p) => p.theme.fontWeights.s};
  padding: 4px;
  cursor: pointer;
  &:hover {
    color: ${(p) => p.theme.colors.white};
    background-color: ${(p) => p.theme.colors.main};
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  }
`;
