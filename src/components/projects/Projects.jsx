import React, {useState, useRef } from 'react';
import "./Projects.css";
import ProjectSidebar from "./ProjectSidebar";
import ProjectPreview from "./ProjectPreview";
import projectsData from "../../data/Projects";

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const previewRef = useRef(null);
  const previewProject = selectedProject ||
    (projectsData[activeCategory] || projectsData["Full-Stack"])[0];

  const handleSelectProject = (project) => {
    setSelectedProject(project);

    if (previewRef.current) {
      previewRef.current.scrollIntoView({ block: "start" });
      previewRef.current.focus({ preventScroll: true });
    }
  };

  return (
  <section id="projects" className="projects">
    <div className="projects-wrapper">
      <h2 className="section-title">Projects</h2>

      <div className="projects-container">
        <ProjectSidebar
          activeCategory={activeCategory}
          setActiveCategory={(category) => {
            setActiveCategory(category);
            setSelectedProject(null);
          }}
          setSelectedProject={handleSelectProject}
        />

        <ProjectPreview ref={previewRef} project={previewProject} />
      </div>
    </div>
  </section>

  )
}

export default Projects;
