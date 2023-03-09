import { createContext, lazy, Suspense, useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import LoaderSpinier from "./components/LoaderSpinier/LoaderSpinier";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";

const HomePage = lazy(() => import("./page/HomePage/HomePage"));
const MastersPage = lazy(() => import("./page/MastersPage/MastersPage"));
const CarePage = lazy(() => import("./page/CarePage/CarePage"));
const CertificatesPage = lazy(() =>
  import("./page/CertificatesPage/CertificatesPage")
);
const ConditionsPage = lazy(() =>
  import("./page/ConditionPage/ConditionsPage")
);

export const masterContext = createContext();

function App() {
  const [master, setMaster] = useState({
    masterFirst: false,
    masterSecond: false,
  });
  console.log(master);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/Master" && master.masterFirst === true) {
      setMaster({
        masterFirst: false,
      });
    }
    if (location.pathname !== "/Master" && master.masterSecond === true) {
      setMaster({ masterSecond: false });
    }
  }, [location, master.masterFirst, master.masterSecond]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  function descendingOrder(n) {
    const a = n.split("");
    let b = [];
    console.log(a);
    // a.filter(()=>{})
  }
  console.log(descendingOrder(42145));
  return (
    <Suspense fallback={<LoaderSpinier />}>
      <masterContext.Provider value={{ master, setMaster }}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="Master" element={<MastersPage />} />
            <Route path="Care" element={<CarePage />} />
            <Route path="Certificates" element={<CertificatesPage />} />
            <Route path="Condition" element={<ConditionsPage />} />
          </Route>
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </masterContext.Provider>
    </Suspense>
  );
}

export default App;
