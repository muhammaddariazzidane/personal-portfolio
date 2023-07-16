import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
    </Routes>
  );
}
