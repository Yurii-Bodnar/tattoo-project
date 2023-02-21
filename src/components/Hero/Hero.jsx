import masterOleg from "../../assets/images/oleg.jpg";
import masterGalka from "../../assets/images/galka.jpg";
import {
  Box,
  Button,
  Container,
  Img,
  SectionHero,
  TextHero,
  Title,
  Wrapper,
} from "./Hero.styled";
import { useContext } from "react";
import { masterContext } from "../../App";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const { setMaster } = useContext(masterContext);
  const navigate = useNavigate();

  const btnFirstMasterHandler = () => {
    setMaster({ masterFirst: true });
    navigate("/Master");
  };
  const btnSecondMasterHandler = () => {
    setMaster({ masterSecond: true });
    navigate("/Master");
  };

  return (
    <SectionHero>
      <Wrapper>
        <Container>
          <Img src={masterOleg} alt="master" />
          <Title>ОЛЕГ ЧІБА</Title>
          <Button onClick={btnFirstMasterHandler} type="button">
            РОБОТИ
          </Button>
        </Container>
        <Box>
          <TextHero>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam sed
            aliquam enim ea quia assumenda. Ea nulla, dolorem adipisci quo
            earum, quidem iste qui enim laudantium placeat facere, magni cum.
          </TextHero>
        </Box>
      </Wrapper>
      <Wrapper>
        <Container>
          <Img src={masterGalka} alt="master" />
          <Title>ГАЛКА</Title>
          <Button onClick={btnSecondMasterHandler} type="button">
            РОБОТИ
          </Button>
        </Container>
        <Box>
          <TextHero>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam sed
            aliquam enim ea quia assumenda. Ea nulla, dolorem adipisci quo
            earum, quidem iste qui enim laudantium placeat facere, magni cum.
          </TextHero>
        </Box>
      </Wrapper>
    </SectionHero>
  );
};

export default Hero;
