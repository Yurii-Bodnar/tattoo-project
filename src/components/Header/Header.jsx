import { useState } from "react";

import ModalMasters from "../ModalMasters/ModalMasters";
import logoTattooToGO from "../../assets/images/sprite.svg";
import iconDownArrow from "../../assets/images/sprite.svg";
import iconDownUp from "../../assets/images/sprite.svg";
import {
  Backdrop,
  Link,
  LinkMasters,
  LinkWrapper,
  Logo,
  LogoIcon,
  MainHeader,
  MainWrap,
  MastersWraps,
  Nav,
  SvgOpenClose,
  Wrapper,
} from "./Header.styled";

import { color, styleHeder } from "../../utility/Constants";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [isModalMastersOpen, setIsModalMastersOpen] = useState(false);

  const location = useLocation();

  const handleModal = () => {
    isModalMastersOpen
      ? setIsModalMastersOpen(false)
      : setIsModalMastersOpen(true);
  };

  const closeModal = (e) => {
    console.log(e.target, e.currentTarget);
    if (e.target === e.currentTarget) {
      setIsModalMastersOpen(false);
    }
  };

  return (
    <MainHeader
      onClick={closeModal}
      style={isModalMastersOpen ? styleHeder : null}
    >
      <Backdrop>
        <Wrapper onClick={closeModal}>
          <Logo to="/">
            <LogoIcon>
              <use href={logoTattooToGO + "#icon-logo"}></use>
            </LogoIcon>
          </Logo>

          <Nav>
            <MainWrap onClick={() => setIsModalMastersOpen(false)}>
              <Link to={"/"}>ГОЛОВНА</Link>
            </MainWrap>
            <MastersWraps>
              <LinkMasters
                onClick={handleModal}
                style={location.pathname === "/Master" ? color : null}
              >
                МАЙСТРИ
                <SvgOpenClose>
                  {isModalMastersOpen ? (
                    <use href={iconDownUp + "#icon-down-up"}></use>
                  ) : (
                    <use href={iconDownArrow + "#icon-down-arrow"}></use>
                  )}
                </SvgOpenClose>
              </LinkMasters>
              {isModalMastersOpen ? <ModalMasters /> : null}
            </MastersWraps>
            <LinkWrapper onClick={() => setIsModalMastersOpen(false)}>
              <Link to={"Care"}>ДОГЛЯД</Link>
              <Link to={"Certificates"}>СЕРТИФІКАТИ</Link>
              <Link to={"Condition"}>УМОВИ СПІВПРАЦІ</Link>
            </LinkWrapper>
          </Nav>
        </Wrapper>
      </Backdrop>
    </MainHeader>
  );
};

export default Header;
