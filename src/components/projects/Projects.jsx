import React from 'react';
import projectsData from '../../data/Projects';

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2>Projects</h2>
        {Object.keys(projectsData).map((category, index) => {
          return (
            <>
            <h2 key={index}>{category}</h2>
             {projectsData[category].map((item, i) => (
              <div key={i} className="project-card">
              <h3>Title: {item.title}</h3>  
              <h4>Description:</h4>
              <p>{item.desc}</p>
              <h4>Tech:</h4>
              <p>{item.tech.join(', ')}</p>
              <h4>Github repo:</h4>
              <p><a href={item.github} target="_blank" rel="noopener noreferrer">{item.github}</a></p>
              {item.demo && (<><h4>Demo:</h4><p><a href={item.demo} target="_blank" rel="noopener noreferrer">{item.demo}</a></p></>)}
              </div>
            ))}
            </>
            )
          })}
      </div>
    </section>  
  )
}

export default Projects;