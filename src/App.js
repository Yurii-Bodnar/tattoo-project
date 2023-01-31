import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
// import CertificatesPage from "./page/CertificatesPage/CertificatesPage";
// import CarePage from "./page/CarePage/CarePage";
// import MastersPage from "./page/MastersPage/MastersPage";
// import HomePage from "./page/HomePage/HomePage";

const HomePage = lazy(() => import("./page/HomePage/HomePage"));
const MastersPage = lazy(() => import("./page/MastersPage/MastersPage"));
const CarePage = lazy(() => import("./page/CarePage/CarePage"));
const CertificatesPage = lazy(() =>
  import("./page/CertificatesPage/CertificatesPage")
);

function App() {
  return (
    <Suspense fallback={<p>...Loading</p>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="Masters" element={<MastersPage />} />
          <Route path="Care" element={<CarePage />} />
          <Route path="Certificates" element={<CertificatesPage />} />
        </Route>
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </Suspense>
  );
}

export default App;
