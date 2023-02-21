import { Outlet, useLocation } from "react-router-dom";
import { Suspense } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export const SharedLayout = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ? null : <Header />}
      <Suspense fallback={<p>...Loading</p>}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};
