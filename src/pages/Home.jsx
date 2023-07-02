import React from "react";
import Layout from "../layouts/Layout";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <Skills />
        <Projects />
        {/* <Contact /> */}
      </Layout>
    </>
  );
}
