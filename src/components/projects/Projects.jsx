import React, {useState} from 'react';
import "./Projects.css";
import projectsData from '../../data/Projects';
import ProjectSidebar from "./ProjectSidebar";
import ProjectPreview from "./ProjectPreview";

function Projects() {

  

  return (
  <section id="projects" className="projects">
    <div className="projects-wrapper">
      <h2 className="section-title">Projects</h2>

      <div className="projects-container">
        <ProjectSidebar />
        <ProjectPreview />
      </div>
    </div>
  </section>

  )
}

export default Projects;