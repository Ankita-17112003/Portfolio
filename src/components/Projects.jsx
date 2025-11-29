import ProjectCard from "./ProjectCard";
import { projects } from "../data";

function Projects() {
  return (
    <section className="container py-5">
      <h2 className="fw-bold mb-4 text-primary">Projects</h2>
      <div className="row g-3">
        {projects.map(project => (
          <div key={project.id} className="col-md-6">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
