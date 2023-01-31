import styled from "styled-components";
import bg from "../../assets/images/bg.jpg";

export const Container = styled.section`
  position: relative;
`;
export const Bg = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 75vh;
  /* filter: blur(2px);
  backdrop-filter: blur(25px); 
  display: flex;
  position: relative;
`;
export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const Title = styled.h1`
  font-size: 70px;
  font-weight: 700;
  color: #fff;
`;
