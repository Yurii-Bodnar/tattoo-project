import {
  Bg,
  Img,
  Item,
  List,
  Text,
  Title,
  Wrapper,
} from "./CertificatesPage.styled";
import certificateOne from "../../assets/images/certificate50.jpg";
import certificateTwo from "../../assets/images/certificate100.jpg";
import certificateThree from "../../assets/images/certificate150.jpg";
import certificateFour from "../../assets/images/certificate200.jpg";

const CertificatesPage = () => {
  return (
    <Bg>
      <List>
        <Item>
          {" "}
          <Img src={certificateOne} alt="certificate" />
          <Wrapper>
            <Title>СЕРТИФІКАТ НА СУМУ 50$</Title>
            <Text>
              Lorem iTextsum, dolor sit amet consectetur adipisicing elit.
              Magnam adipisci ratione doloribus facere, dicta fuga. Dicta
              adipisci harum hic esse quia quaerat quas est explicabo vero
              officia dolor, expedita voluptas.
            </Text>
          </Wrapper>
        </Item>
        <Item>
          {" "}
          <Img src={certificateTwo} alt="certificate" />
          <Wrapper>
            <Title>СЕРТИФІКАТ НА СУМУ 100$</Title>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
              adipisci ratione doloribus facere, dicta fuga. Dicta adipisci
              harum hic esse quia quaerat quas est explicabo vero officia dolor,
              expedita voluptas.
            </Text>
          </Wrapper>
        </Item>
        <Item>
          {" "}
          <Img src={certificateThree} alt="certificate" />
          <Wrapper>
            <Title>СЕРТИФІКАТ НА СУМУ 150$</Title>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
              adipisci ratione doloribus facere, dicta fuga. Dicta adipisci
              harum hic esse quia quaerat quas est explicabo vero officia dolor,
              expedita voluptas.
            </Text>
          </Wrapper>
        </Item>
        <Item>
          {" "}
          <Img src={certificateFour} alt="certificate" />
          <Wrapper>
            <Title>СЕРТИФІКАТ НА СУМУ 200$</Title>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
              adipisci ratione doloribus facere, dicta fuga. Dicta adipisci
              harum hic esse quia quaerat quas est explicabo vero officia dolor,
              expedita voluptas.
            </Text>
          </Wrapper>
        </Item>
      </List>
    </Bg>
  );
};

export default CertificatesPage;
