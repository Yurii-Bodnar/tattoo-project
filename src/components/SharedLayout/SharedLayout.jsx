import { Outlet, useLocation } from "react-router-dom";
import { Suspense } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useIsMobile } from "../../utility/hooks";
import HeaderMobile from "../HeaderMobile/HeaderMobile";
import LoaderSpinier from "../LoaderSpinier/LoaderSpinier";

export const SharedLayout = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  return (
    <>
      {location.pathname === "/" ? null : isMobile ? (
        <HeaderMobile />
      ) : (
        <Header />
      )}
      <Suspense fallback={<LoaderSpinier />}>
        <Outlet />
        <Footer />
      </Suspense>
    </>
  );
};
