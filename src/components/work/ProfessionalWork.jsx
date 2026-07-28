import "./ProfessionalWork.css";
import professionalProjects from "../../data/Professional";
import GlowCard from "../ui/GlowCard";

function ProfessionalWork() {
  return (
    <section id="work" className="work">
      <div className="work-wrapper">
        <h2 className="section-title">Professional Work</h2>
        <p className="work-note">
          Commercial projects I built or co-built — the code belongs to clients,
          so there are no public repos here.
        </p>

        <div className="work-grid">
          {professionalProjects.map((project) => (
            <GlowCard key={project.title} className="project-card work-card">
              <span className="work-context">{project.context}</span>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <p className="tech">{project.tech.join(", ")}</p>
              {project.demo && (
                <div className="links">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live site
                  </a>
                </div>
              )}
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProfessionalWork;
