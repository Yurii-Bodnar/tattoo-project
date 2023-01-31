import masterOleg from "../../assets/images/oleg.jpg";
import masterGalka from "../../assets/images/galka.jpg";
import { Button, Container, Img, SectionHero } from "./Hero.styled";

const Hero = () => {
  return (
    <SectionHero>
      <Container>
        <Img src={masterOleg} alt="master" width={350} />

        <Button type="button">Роботи</Button>
      </Container>
      <Container>
        <Img src={masterGalka} alt="master" width={350} />

        <Button type="button">Роботи</Button>
      </Container>
    </SectionHero>
  );
};

export default Hero;
