import React, { useEffect, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./utils/Loader";
const Home = React.lazy(() => import("./pages/Home"));

export default function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <Routes>
      <Route
        path={"/"}
        element={
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        }
      />
    </Routes>
  );
}
