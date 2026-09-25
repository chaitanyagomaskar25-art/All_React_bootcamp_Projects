import React from "react";
import FeaturedProjects from "./FeaturedProjects";

const projects = [
  {
    title: "Todo App",
    description: "A task manager with add, delete and filter features.",
    tech: "JS,HTML, CSS",
    live: "https://your-live-link.com",
    github: "https://github.com/yourusername/todo"
  },
  {
    title: "Weather App",
    description: "Shows real-time weather using API.",
    tech: "JavaScript, API, CSS, HTML",
    live: "#",
    github: "#"
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with React.",
    tech: "React, CSS",
    live: "#",
    github: "#"
  }
];

const Projects = () => {
  return (
    <>
        <section id="projects" className="projects">
      <h2 className="section-title">Selected Works</h2>

      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          
          <div className="project-image">
            Screenshot
          </div>

          <div className="project-info">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tech: </strong> {project.tech}</p>

            <div className="btn-group">
              <a href={project.live} target="_blank" className="btn btn-dark">
                Live
              </a>
              <a href={project.github} target="_blank" className="btn btn-light">
                GitHub
              </a>
            </div>
          </div>

        </div>
      ))}
    </section>

    <FeaturedProjects />
</>
  );
};

export default Projects;