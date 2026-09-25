import React from "react";
import Education from "../components/Education";
import Skills from "../components/Skills";
import AboutContent from "../components/AboutContent";
import Resume from "../components/Resume";
import AvaialableStatus from "../components/AvaialableStatus";
import Experience from "../components/Experience";

const About = () => {
  return (
    <>
    <section id="about" className="about-grid">
      <AboutContent />
      <Education />
      <Skills />
      <Resume />
      <Experience />
    </section>
      <AvaialableStatus />
</>
  );
};

export default About;
