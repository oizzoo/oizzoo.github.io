import "./ProjectPreview.css"

function ProjectPreview({project}) {

  if (!project) {
  return (
    <div className="project-preview">
      <p className="placeholder">← Click a project to preview it</p>
    </div>
  )
}


  return (
    <div className="project-preview">
      <h2>{project.title}</h2>

      {project.video ? (
        <video
          src={project.video}
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

  )
}
export default ProjectPreview;