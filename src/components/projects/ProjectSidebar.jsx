import "./ProjectSidebar.css";
import "./ProjectList.css";
import projectsData from "../../data/Projects";
import GlowCard from "../ui/GlowCard";
import { useState, useMemo } from "react";

function ProjectSidebar({
  activeCategory,
  setActiveCategory,
  setSelectedProject,
}) {
  const categories = useMemo(
    () => ["All", ...Object.keys(projectsData)],
    [projectsData]
  );

  const visibleProjects =
    activeCategory === "All"
      ? Object.values(projectsData).flat()
      : projectsData[activeCategory] || [];

  return (
    <aside>
      <div className="categories">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-btn ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="projects-grid">
        {visibleProjects.map((project) => (
          <GlowCard
            key={project.title}
            className="project-card"
            onClick={() => {
              console.log("Clicked:", project.title);
              setSelectedProject(project);
            }}
          >
            <h3>{project.title}</h3>
            <p>{project.desc}</p>

            <p className="tech">{project.tech.join(", ")}</p>

            <div className="links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              )}
            </div>
          </GlowCard>
        ))}
      </div>
    </aside>
  );
}
export default ProjectSidebar;
