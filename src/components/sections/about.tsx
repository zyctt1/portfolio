import { Reveal } from "@/components/ui/reveal";
import { portfolio } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="about section-shell" aria-labelledby="about-title">
      <div className="about-copy">
        <p className="eyebrow">About / {portfolio.person.name}</p>
        <Reveal>
          <h2 id="about-title">{portfolio.person.aboutHeadline}</h2>
        </Reveal>
        <div className="about-body">
          {portfolio.person.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>
      <div className="about-portrait" role="img" aria-label={`Abstract portrait placeholder for ${portfolio.person.name}`}>
        <div aria-hidden="true" className="portrait-head" />
        <div aria-hidden="true" className="portrait-shadow" />
        <p>Portrait<br />placeholder</p>
        <span>Replace with {portfolio.person.firstName}&apos;s photograph</span>
      </div>
    </section>
  );
}
