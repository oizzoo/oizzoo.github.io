import "./ProjectSidebar.css"
import projectsData from "../../data/Projects";
import { useState, useMemo } from "react";


function ProjectSidebar() {
    const categories = useMemo(
    () => ["All", ...Object.keys(projectsData)],
    [projectsData]
  );

  const [activeCategory, setActiveCategory] = useState("All");

  const visibleProjects = (
        activeCategory === "All"
        ? Object.values(projectsData).flat()
        : projectsData[activeCategory] || []
    );
  
    return (
    <aside>
      <div className="categories">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-btn ${activeCategory === category ? "active" : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="projects-list">
        {visibleProjects.map((project) => (
          <div key={project.title} className="project-item">
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
          </div>
        ))}
      </div>
    </aside>
  );
     
}
export default ProjectSidebar;