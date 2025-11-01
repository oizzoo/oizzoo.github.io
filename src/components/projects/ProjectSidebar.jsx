import "./ProjectSidebar.css"
import projectsData from "../../data/Projects";
import { useState, useMemo } from "react";


function ProjectSidebar() {
    const categories = useMemo(
    () => ["All", ...Object.keys(projectsData)],
    [projectsData]
  );

  const [activeCategory, setActiveCategory] = useState("All");

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
    </aside>
  );
     
}
export default ProjectSidebar;