import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section-heading">
        <h2>Projects</h2>
        <a href="#contact" className="link-cta">
          Contact me
        </a>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <img src={project.image} alt={project.title} loading="lazy" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.tech.join('  ')}</p>
            </div>
            <div className="project-actions">
              <a
                href={project.liveUrl}
                className="link-cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                View project
              </a>
              <a
                href={project.repoUrl}
                className="link-cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                View code
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
