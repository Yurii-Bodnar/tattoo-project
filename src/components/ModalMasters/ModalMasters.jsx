import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { masterContext } from "../../App";
import { Box, Container, Text } from "./ModalMasters.styled";

const ModalMasters = () => {
  const { setMaster } = useContext(masterContext);
  const location = useLocation();

  const navigate = useNavigate();

  const linkToMasterFirst = () => {
    if (location.pathname) {
      setMaster({ masterFirst: true });
      navigate("/Master");
    }
  };
  const linkToMasterSecond = () => {
    if (location.pathname) {
      setMaster({ masterSecond: true });
      navigate("/Master");
    }
  };

  return (
    <>
      <Container></Container>
      <Box>
        <Text onClick={linkToMasterFirst}>ОЛЕГ</Text>
        <Text onClick={linkToMasterSecond}>ГАЛКА</Text>
      </Box>
    </>
  );
};

export default ModalMasters;
