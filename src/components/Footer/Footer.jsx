// import { useMediaQuery } from "react-responsive";
import icons from "../../assets/images/sprite.svg";
import { useIsDesktop, useIsTablet } from "../../utility/hooks";
import {
  Box,
  Container,
  FooterWrap,
  LinkSocial,
  List,
  LogoBox,
  LogoIcon,
  LogoTitle,
  MapLink,
  MapWrapper,
  SocialSvg,
  TelIcon,
  TelLink,
  TitleName,
  Wrapper,
} from "./Footer.styled";

const Footer = () => {
  // const isMobile = useMediaQuery({ maxWidth: 767 });
  // const isTablet = () => useMediaQuery({ maxWidth: 1279 });

  return (
    <FooterWrap>
      <Wrapper>
        <LogoBox>
          <LogoTitle>TATTOO TO </LogoTitle>
          <LogoIcon>
            <use href={icons + "#icon-logo"}></use>
          </LogoIcon>
        </LogoBox>
        <MapWrapper>
          <MapLink
            href="https://www.google.com.ua/maps/place/%D0%93%D0%B0%D0%BB%D0%B1%D1%83%D0%B4,+%D0%92%D0%90%D0%A2/@49.8144399,24.0186298,19.35z/data=!4m13!1m7!3m6!1s0x473ae78d8a943155:0xc24d82b62a91c2ae!2z0YPQuy4g0JDQutCw0LTQtdC80LjQutCwINCb0LDQt9Cw0YDQtdC90LrQviwg0JvRjNCy0L7Qsiwg0JvRjNCy0L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!3b1!8m2!3d49.815208!4d24.0144401!3m4!1s0x473ae792bcf6bd6d:0x8387dd1e6cd74249!8m2!3d49.8144172!4d24.0187778?hl=ru"
            target="_blank"
            rel="noopener noreferrer"
          >
            м.Львів, вул.Лазаренка 4
          </MapLink>
        </MapWrapper>
        <Box>
          <Container>
            <TitleName>ОЛЕГ</TitleName>{" "}
            <TelLink href="tel:+380932247225">
              <TelIcon>
                <use href={icons + "#icon-telephone"}></use>
              </TelIcon>{" "}
              +380932247225
            </TelLink>
            <List>
              <li>
                <LinkSocial
                  href="https://www.instagram.com/chiba_tattoo/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialSvg>
                    <use href={icons + "#icon-instagram-2"}></use>
                  </SocialSvg>
                </LinkSocial>
              </li>
              <li>
                {" "}
                <LinkSocial
                  href="https://t.me/olegchibatattoo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialSvg>
                    <use href={icons + "#icon-telegram"}></use>
                  </SocialSvg>
                </LinkSocial>
              </li>
              <li>
                {" "}
                <LinkSocial
                  href="https://www.facebook.com/oleg.chiba.5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialSvg>
                    <use href={icons + "#icon-facebook-1"}></use>
                  </SocialSvg>
                </LinkSocial>
              </li>
            </List>
          </Container>
          <Container>
            <TitleName>ГАЛКА</TitleName>{" "}
            <TelLink href="tel:+380633539132">
              <TelIcon>
                <use href={icons + "#icon-telephone"}></use>
              </TelIcon>{" "}
              +380633539132
            </TelLink>
            <List>
              <li>
                <LinkSocial
                  href="https://www.instagram.com/galatattooer/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialSvg>
                    <use href={icons + "#icon-instagram-2"}></use>
                  </SocialSvg>
                </LinkSocial>
              </li>
              <li>
                {" "}
                <LinkSocial
                  href="https://t.me/galatattooer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialSvg>
                    <use href={icons + "#icon-telegram"}></use>
                  </SocialSvg>
                </LinkSocial>
              </li>
              <li>
                {" "}
                <LinkSocial href="https://www.facebook.com/galka.kovalchuk">
                  <SocialSvg>
                    <use href={icons + "#icon-facebook-1"}></use>
                  </SocialSvg>
                </LinkSocial>
              </li>
            </List>
          </Container>
        </Box>
      </Wrapper>
      {useIsDesktop() && (
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d643.6227016311029!2d24.0186298!3d49.8144399!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae792bcf6bd6d%3A0x8387dd1e6cd74249!2z0JPQsNC70LHRg9C0LCDQktCQ0KI!5e0!3m2!1sru!2sua!4v1675788185289!5m2!1sru!2sua"
            width="700"
            height="200"
            title="This is a unique title"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      )}
      {useIsTablet() && (
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d643.6227016311029!2d24.0186298!3d49.8144399!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae792bcf6bd6d%3A0x8387dd1e6cd74249!2z0JPQsNC70LHRg9C0LCDQktCQ0KI!5e0!3m2!1sru!2sua!4v1675788185289!5m2!1sru!2sua"
            width="300"
            height="200"
            title="This is a unique title"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      )}
    </FooterWrap>
  );
};

export default Footer;
