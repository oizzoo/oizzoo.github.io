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
               <React.Fragment key={i}>
              <h3>Title: {item.title}</h3>  
              <h3>Description:</h3>
              <p>{item.desc}</p>
              <h3>Tech:</h3>
              <p>{item.tech.join(', ')}</p>
              <h3>Github repo:</h3>
              <p>{item.github}</p>
              {item.demo && (<><h3>Demo:</h3><p><a href={item.demo} target="_blank" rel="noopener noreferrer">{item.demo}</a></p></>)}
              </React.Fragment>
            ))}
            </>
            )
          })}
      </div>
    </section>  
  )
}

export default Projects;