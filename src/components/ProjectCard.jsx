function ProjectCard({ project }) {
  return (
    <div className="card p-3 mb-3 shadow h-100">
      <h5 className="fw-bold">{project.name}</h5>
      <p>{project.description}</p>
      <a href={project.link} className="btn btn-primary btn-sm">View Project</a>
    </div>
  );
}

export default ProjectCard;
