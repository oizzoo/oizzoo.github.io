import React, { forwardRef } from "react";
import "./ProjectPreview.css"

const ProjectPreview = forwardRef(({project}, ref) => {

  if (!project) {
    return (
      <div className="project-preview" ref={ref}>
        <p className="placeholder">← Click a project to preview it</p>
      </div>
      )
  }


  return (
    <div id="project-preview" className="project-preview" ref={ref} tabIndex={-1} aria-label="Project preview">
      <h3>{project.title}</h3>

      {project.video ? (
        <video
          key={project.video}
          src={project.video}
          preload="none"
          poster={project.poster}
          controls
          className="project-video"
          playsInline
        />
      ) : project.demo ? (
      <div className="project-iframe-wrapper">  
        <iframe
          src={project.demo}
          title={project.title}
          className="project-iframe"
          loading="lazy"
        />
      </div>  
      ) : (
        <p className="no-preview">No preview available</p>
      )}
    </div>
  );
});

export default ProjectPreview;
