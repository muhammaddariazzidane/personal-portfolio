import React from "react";
import Layout from "../layouts/Layout";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import About from "../components/About";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Layout>
    </>
  );
}
