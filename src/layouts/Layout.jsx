import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

export default function Layout({ children }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY > 150) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);
  return (
    <>
      <Navbar />
      {children}
      <BackToTop show={show} />
      <Footer />
    </>
  );
}
