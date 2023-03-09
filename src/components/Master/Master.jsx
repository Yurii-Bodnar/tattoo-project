import masterOleg from "../../assets/images/oleg.jpg";
import masterGalka from "../../assets/images/galka.jpg";
import {
  Container,
  ImgMaster,
  List,
  AboutMasterText,
  Section,
  Wrapper,
  ModalOverlay,
  ModalImg,
  ModalWrapper,
  ImgTattoo,
  WrapList,
  Item,
} from "./Master.styled";
import { masterFirstWorks } from "./MasterData";
import { useContext, useEffect, useState } from "react";
import { masterContext } from "../../App";
import { useLocation } from "react-router-dom";

const Master = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const location = useLocation();

  const { master, setMaster } = useContext(masterContext);
  // console.log(master);

  const modalClose = (e) => {
    if (e.target === e.currentTarget || e.code === "Escape") {
      setIsModalOpen(false);
      setModalData(null);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", modalClose);
    return () => {
      window.removeEventListener("keydown", modalClose);
    };
  }, []);

  useEffect(() => {
    const scrollFunc = () => {
      document.body.scrollTop = 0;
    };
    if (
      location.pathname === "/Master" &&
      (master.masterSecond || master.masterFirst)
    ) {
      window.addEventListener("scroll", scrollFunc);
    }
    return () => {
      window.removeEventListener("scroll", scrollFunc);
    };
  }, [location.pathname, master.masterSecond, master.masterFirst]);

  useEffect(() => {
    if (location.pathname !== "/Master") {
      setMaster({ masterFirst: false, masterSecond: false });
    }
  }, [location.pathname, setMaster]);

  const modalOpen = (e) => {
    if (e.target.src === undefined) {
      return;
    } else {
      setIsModalOpen(true);
      const targetValue = e.target.src.slice(21);
      const finedImg = masterFirstWorks.filter((el) => {
        return el.url === targetValue;
      });
      setModalData(finedImg[0].url);
    }
  };

  return (
    <Section>
      <Container>
        <div>
          <ImgMaster
            src={master.masterFirst ? masterOleg : masterGalka}
            alt="master"
          />
        </div>
        <Wrapper>
          <AboutMasterText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            quas debitis impedit delectus in molestias ut perferendis recusandae
            quae quasi culpa, accusantium aliquid ipsa, vitae fugiat cum id
            magni, nisi a ea illum distinctio! Corporis repudiandae voluptatum
            in! Error provident voluptates in molestiae illum placeat
            asperiores, cumque et minus dolore?
          </AboutMasterText>
        </Wrapper>
      </Container>
      <WrapList>
        <List onClick={modalOpen}>
          {masterFirstWorks.map((el) => {
            return (
              <Item key={el.id}>
                <ImgTattoo src={el.url} alt="tattoo" />
              </Item>
            );
          })}
        </List>
        {isModalOpen ? (
          <ModalOverlay onClick={modalClose}>
            <ModalWrapper>
              <ModalImg src={modalData} alt="tattoo" width={500} />
            </ModalWrapper>
          </ModalOverlay>
        ) : null}
      </WrapList>
    </Section>
  );
};

export default Master;
