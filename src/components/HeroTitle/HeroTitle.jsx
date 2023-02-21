import { Bg, Container, Title, Wrapper, Logo } from "./HeroTitle.styled";
import iconLogo from "../../assets/images/sprite.svg";
const HeroTitle = () => {
  return (
    <Container>
      <Bg></Bg>
      <Wrapper>
        <Title>TATTOO TO</Title>
        <Logo>
          <use href={iconLogo + "#icon-logo"}></use>
        </Logo>
      </Wrapper>
    </Container>
  );
};

export default HeroTitle;
