import styled from "styled-components";
import bg from "../../assets/images/backgorundSmallDolar.jpg";

export const Section = styled.section`
  padding: 90px 20px 20px;
  display: flex;
  gap: 65px;
  flex-direction: column;
  /* background-color: ${(p) => p.theme.colors.primary}; */
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media screen and (max-width: 767px) {
    padding: 35px 10px;
  }
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
  width: 720px;
  margin: 0 auto;
  @media screen and (max-width: 1279px) {
    gap: 60px;
    width: 700px;
  }
  @media screen and (max-width: 767px) {
    gap: 20px;
    width: 100%;
  }
`;
export const ImgMaster = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 3px solid ${(p) => p.theme.colors.white};
  padding: 8px;
  @media screen and (max-width: 1279px) {
    width: 150px;
    height: 150px;
    padding: 5px;
  }
  @media screen and (max-width: 767px) {
    width: 100px;
    height: 100px;
    padding: 0;
    border: none;
  }
`;

export const Wrapper = styled.div`
  position: relative;
`;
export const AboutMasterText = styled.p`
  font-size: ${(p) => p.theme.fontSizes.xs};
  font-weight: ${(p) => p.theme.fontWeights.s};
  font-family: ${(p) => p.theme.fonts.main};
  color: ${(p) => p.theme.colors.white};
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
`;
export const WrapList = styled.div`
  display: flex;
  margin: 0 auto;
`;
export const List = styled.ul`
  display: flex;
  gap: 30px;

  width: 934px;
  flex-flow: row wrap;
  @media screen and (max-width: 1279px) {
    width: 640px;
    gap: 20px;
  }
  @media screen and (max-width: 768px) {
    width: 333px;
    gap: 3px;
  }
  @media screen and (max-width: 359px) {
    width: 282px;
    gap: 3px;
  }
`;
export const Item = styled.li`
  width: 290px;
  height: 290px;
  /* cursor: pointer; */
  /* height: 100%; */
  /* width: 100%; */
  @media screen and (max-width: 1279px) {
    width: 200px;
    height: 200px;
  }
  @media screen and (max-width: 767px) {
    width: 108px;
    height: 108px;
  }
  @media screen and (max-width: 359px) {
    width: 92px;
    height: 92px;
  }
`;

export const ImgTattoo = styled.img`
  width: 290px;
  height: 290px;
  cursor: pointer;
  /* height: 100%; */
  /* width: 100%; */
  @media screen and (max-width: 1279px) {
    width: 200px;
    height: 200px;
  }
  @media screen and (max-width: 767px) {
    width: 108px;
    height: 108px;
  }
  @media screen and (max-width: 359px) {
    width: 92px;
    height: 92px;
  }
`;
export const ModalOverlay = styled.div`
  background: rgba(17, 17, 17, 0.6);
  position: fixed;
  width: 100vw;
  height: 100%;
  left: 0px;
  top: 0px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  overflow-y: auto;
  align-items: center;
  z-index: 10;
`;
export const ModalWrapper = styled.div`
  animation: 0.7s cubic-bezier(0.39, 0.575, 0.565, 1) 0s 1 normal both running
    scale-up-center;
  @keyframes scale-up-center {
    0% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1);
    }
  }
`;
export const ModalImg = styled.img`
  width: 500px;
  height: 500px;
  @media screen and (max-width: 1279px) {
    width: 400px;
    height: 400px;
  }
  @media screen and (max-width: 767px) {
    width: 290px;
    height: 290px;
  }
`;
