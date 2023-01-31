import {
  Link,
  Logo,
  LogoText,
  MainHeader,
  Nav,
  Wrapper,
} from "./Header.styled";

const Header = () => {
  return (
    <MainHeader>
      <Wrapper>
        <Logo to="/tattoo-arena">
          <LogoText>OG Tattoo-Arena</LogoText>
        </Logo>
        <Nav>
          <Link to={"Masters"}>Майстри</Link>
          <Link to={"Care"}>Догляд</Link>
          <Link to={"Certificates"}>Сертифікати</Link>
        </Nav>
      </Wrapper>
    </MainHeader>
  );
};

export default Header;
