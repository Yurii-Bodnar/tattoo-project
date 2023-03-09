import { useEffect, useRef } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/sprite.svg";
import buttonMenu from "../../assets/images/sprite.svg";
import buttonClose from "../../assets/images/sprite.svg";
import { useIsMobile } from "../../utility/hooks";

import {
  ButtonClose,
  ButtonCloseIcon,
  ButtonIcon,
  ButtonMenu,
  Header,
  Item,
  Link,
  List,
  Logo,
  ModalContainer,
  Nav,
} from "./HeaderMobile.styled";

const HeaderMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const toggleModal = () => {
    isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
  };
  const modal = useRef(null);

  useEffect(() => {
    const changeDisplay = () =>
      setTimeout(() => {
        modal.current.style.display = "none";
      }, 100);
    if (!isMenuOpen) {
      console.log(isMenuOpen);

      changeDisplay();
    } else {
      console.log("else", isMenuOpen);
      modal.current.style.display = "flex";
    }
  }, [isMenuOpen]);
  useEffect(() => {
    if (isMenuOpen && isMobile) {
      document.body.style.overflowY = "hidden";
    } else {
      // eslint-disable-next-line no-unused-expressions
      document.body.style.overflow = "hidden auto";
      // document.body.style.transition = "all 0.93s";
    }
  }, [isMenuOpen, isMobile]);

  return (
    <Header>
      <NavLink to={"/"}>
        <Logo>
          <use href={logo + "#icon-logo"}></use>
        </Logo>
      </NavLink>
      {!isMenuOpen ? (
        <ButtonMenu type="button" onClick={toggleModal}>
          <ButtonIcon>
            <use href={buttonMenu + "#icon-burger-menu"}></use>
          </ButtonIcon>
        </ButtonMenu>
      ) : null}
      <ModalContainer ref={modal} open={isMenuOpen}>
        <ButtonClose open={isMenuOpen} type="button" onClick={toggleModal}>
          <ButtonCloseIcon>
            <use href={buttonClose + "#icon-closeBtn"}></use>
          </ButtonCloseIcon>
        </ButtonClose>
        <Nav>
          <List onClick={toggleModal}>
            <Item>
              <Link to={"/"}>ГОЛОВНА</Link>
            </Item>
            <Item>
              <Link to={"/Care"}>ДОГЛЯД</Link>
            </Item>
            <Item>
              <Link to={"/Certificates"}>СЕРТИФІКАТИ</Link>
            </Item>
            <Item>
              <Link to={"/Condition"}>УМОВИ СПІВПРАЦІ</Link>
            </Item>
          </List>
        </Nav>
      </ModalContainer>
    </Header>
  );
};

export default HeaderMobile;
