import { createContext, lazy, Suspense, useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
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

  return (
    <Suspense fallback={<p>...Loading</p>}>
      <masterContext.Provider value={{ master, setMaster }}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="Master" element={<MastersPage />}></Route>
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
