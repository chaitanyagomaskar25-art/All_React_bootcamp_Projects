import React from "react";
import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Stats from "./components/Stats";
import WhatICanDo from "./components/WhatICanDo";
import CodeQality from "./components/CodeQality";
import Tools from "./components/Tools";
import Learning from "./components/Learning";
import AvaialableStatus from "./components/AvaialableStatus";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Stats />
      <WhatICanDo />
      <CodeQality />
      <Tools />
      <Learning />
      <AvaialableStatus />
      <Contact />
      <Footer />
    </>
  );
};

export default App;