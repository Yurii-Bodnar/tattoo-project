import styled from "styled-components";

export const SectionHero = styled.section`
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
  background-color: #272727;
`;
export const Img = styled.img`
  border-radius: 50%;
  height: 350px;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 15px;
`;
export const Button = styled.button`
  width: 170px;
  height: 45px;
  border: none;
  border-radius: 10px;
  background: orange;
  font-weight: 500;
  font-size: 20px;
  /* line-height: 1.38; */
  color: #424140;
`;
