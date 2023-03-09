import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { masterContext } from "../../App";
import Master from "../../components/Master/Master";

const MastersPage = () => {
  const { master } = useContext(masterContext);
  const navigate = useNavigate();
  console.log(master.masterFirst === false || master.masterSecond === false);

  useEffect(() => {
    if (master.masterFirst === false || master.masterSecond === false) {
      navigate("/");
    }
    // !master.masterFirst || !master.masterSecond ? navigate("/") : null;
  }, [master.masterSecond, master.masterFirst, navigate]);
  return <Master />;
};

export default MastersPage;
