import {
  Bg,
  Container,
  Title,
  Wrapper,
  Logo,
  BoxMobile,
  TitleMobile,
  TitleHidden,
  PartTitle,
} from "./HeroTitle.styled";
import iconLogo from "../../assets/images/sprite.svg";
import { useIsDesktopOrTablet, useIsMobile } from "../../utility/hooks";
const HeroTitle = () => {
  const isMobile = useIsMobile();
  const isDesktopOrDesktop = useIsDesktopOrTablet();
  // const isT
  return (
    <Container>
      <Bg>
        <Wrapper>
          {isDesktopOrDesktop && (
            <>
              <Title>TATTOO TO</Title>
              <Logo>
                <use href={iconLogo + "#icon-logo"}></use>
              </Logo>
            </>
          )}
          {isMobile && (
            <div>
              <TitleMobile>
                TATTOO
                <TitleHidden>TO GO</TitleHidden>
              </TitleMobile>
              <BoxMobile>
                <PartTitle>TO</PartTitle>
                <Logo>
                  <use href={iconLogo + "#icon-logo"}></use>
                </Logo>
              </BoxMobile>
            </div>
          )}
        </Wrapper>
      </Bg>
    </Container>
  );
};

export default HeroTitle;
