import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/sprite.svg";
import buttonMenu from "../../assets/images/sprite.svg";
import buttonClose from "../../assets/images/sprite.svg";

import {
  ButtonClose,
  ButtonCloseIcon,
  ButtonIcon,
  ButtonMenu,
  Header,
  Link,
  List,
  Logo,
  ModalContainer,
} from "./HeaderMobile.styled";

const HeaderMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const toggleModal = () => {
    isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
  };

  useEffect(() => {
    isMenuOpen
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "auto");
  }, [isMenuOpen]);
  return (
    <Header>
      <NavLink to={"/"}>
        <Logo>
          <use href={logo + "#icon-logo"}></use>
        </Logo>
      </NavLink>
      <ButtonMenu type="button" onClick={toggleModal}>
        <ButtonIcon>
          <use href={buttonMenu + "#icon-burger-menu"}></use>
        </ButtonIcon>
      </ButtonMenu>
      {isMenuOpen && (
        <ModalContainer>
          <ButtonClose type="button" onClick={toggleModal}>
            <ButtonCloseIcon>
              <use href={buttonClose + "#icon-closeBtn"}></use>
            </ButtonCloseIcon>
          </ButtonClose>
          <nav>
            <List onClick={toggleModal}>
              <li>
                <Link to={"/"}>ГОЛОВНА</Link>
              </li>
              <li>
                <Link to={"/"}>МАЙСТРИ</Link>
              </li>
              <li>
                <Link to={"/Care"}>ДОГЛЯД</Link>
              </li>
              <li>
                <Link to={"/Certificates"}>СЕРТИФІКАТИ</Link>
              </li>
              <li>
                <Link to={"/Condition"}>УМОВИ СПІВПРАЦІ</Link>
              </li>
            </List>
          </nav>
        </ModalContainer>
      )}
    </Header>
  );
};

export default HeaderMobile;
