import React from "react";
import Education from "./Education";
import Skills from "./Skills";

const About = () => {
  return (
    <section id="about" className="about-grid">
      <div className="about-text">
        <h2>The Story</h2>
        <p>I am a developer focused on building clean, efficient, and scalable applications.
I write maintainable code with strong architecture and best practices in mind.
I enjoy solving complex problems and creating reliable, user-friendly solutions.</p>

        <div className="skills-tags">
          <span className="tag">JavaScript</span>
          <span className="tag">React</span>
          <span className="tag">Python</span>
        </div>
      </div>

      <div className="about-text">
        <h2>Approach</h2>
        <p>I focus on performance and user-friendly design.</p>
      </div>
      <Education />
      <Skills />
    </section>
  );
};

export default About;