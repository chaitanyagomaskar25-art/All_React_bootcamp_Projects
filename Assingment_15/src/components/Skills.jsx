import React from "react";

const skills = [
  "JavaScript",
  "React",
  "HTML",
  "CSS",
  "GitHub",

];

const Skills = () => {
  return (
    <section className="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;