import { useState } from 'react'
import { projects, type Project } from '../data/portfolio'
import ProjectLightbox from './ProjectLightbox'

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)

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
            <button
              type="button"
              className="project-card__thumb"
              onClick={() => setActiveProject(project)}
              aria-label={`Open ${project.title} photo slideshow`}
            >
              <img src={project.images[0]} alt={project.title} loading="lazy" />
            </button>
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

      {activeProject && (
        <ProjectLightbox
          title={activeProject.title}
          images={activeProject.images}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  )
}
