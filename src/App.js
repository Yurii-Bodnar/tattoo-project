import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
// import HomePage from "./page/HomePage/HomePage";

const HomePage = lazy(() => import("./page/HomePage/HomePage"));

function App() {
  return (
    <Suspense fallback={<p>...Loading</p>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </Suspense>
  );
}

export default App;
