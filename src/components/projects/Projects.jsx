import React, {useState, useRef } from 'react';
import "./Projects.css";
import projectsData from '../../data/Projects';
import ProjectSidebar from "./ProjectSidebar";
import ProjectPreview from "./ProjectPreview";

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const previewRef = useRef(null);

  const handleSelectProject = (project) => {
    setSelectedProject(project);

    if (previewRef.current) {
      previewRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
  <section id="projects" className="projects">
    <div className="projects-wrapper">
      <h2 className="section-title">Projects</h2>

      <div className="projects-container">
        <ProjectSidebar
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          setSelectedProject={handleSelectProject}
        />

        <ProjectPreview ref={previewRef} project={selectedProject} />
      </div>
    </div>
  </section>

  )
}

export default Projects;