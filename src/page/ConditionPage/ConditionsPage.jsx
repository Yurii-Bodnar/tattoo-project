import db from "../../db";
import { BgImg, Container, Text, Title } from "./Conditions.styled";

const ConditionsPage = () => {
  return (
    <>
      <BgImg></BgImg>
      <Container>
        <Title>УМОВИ СПІВПРАЦІ</Title>
        <Text>{db.condition}</Text>
      </Container>
    </>
  );
};

export default ConditionsPage;
