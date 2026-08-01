import { ArrowUpRight } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { ProjectVisual } from "@/components/visuals/project-visual";
import { Reveal } from "@/components/ui/reveal";

export function SelectedWork() {
  return (
    <section id="work" className="work-section section-shell" aria-labelledby="work-title">
      <header className="section-heading">
        <p className="eyebrow">Selected products / 2026</p>
        <h2 id="work-title">Two products, built end to end.</h2>
      </header>

      <div className="projects-list">
        {portfolio.projects.map((project, projectIndex) => (
          <Reveal key={project.title}>
            <article className={`project project-${project.visual}`}>
              <div className="project-topline">
                <p className="project-index">({project.index})</p>
                <p className="concept-label">{project.disclaimer}</p>
              </div>
              <div className="project-title-row">
                <h3>{project.title}</h3>
                <p>{project.challenge}</p>
              </div>
              <ProjectVisual kind={project.visual} />
              <div className="project-details">
                <dl>
                  <div>
                    <dt>Industry</dt>
                    <dd>{project.industry}</dd>
                  </div>
                  <div>
                    <dt>Role</dt>
                    <dd>{project.role}</dd>
                  </div>
                  <div>
                    <dt>Year</dt>
                    <dd>{project.year}</dd>
                  </div>
                </dl>
                <p className="project-outcome">
                  <span>Outcome</span>
                  {project.outcome}
                </p>
                {project.href && project.linkLabel && (
                  <a className="project-link" href={project.href} target="_blank" rel="noreferrer">
                    {project.linkLabel}
                    <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.5} />
                  </a>
                )}
              </div>
              <span className="project-sequence" aria-hidden="true">
                0{projectIndex + 1}
              </span>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
