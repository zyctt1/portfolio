import { portfolio } from "@/data/portfolio";
import { Reveal } from "@/components/ui/reveal";

export function Capabilities() {
  return (
    <section className="capabilities section-shell" aria-labelledby="capabilities-title">
      <div className="capabilities-intro">
        <p className="eyebrow">Capabilities / not a menu</p>
        <Reveal>
          <h2 id="capabilities-title">
            The work is <em>integrated</em> by design.
          </h2>
        </Reveal>
      </div>
      <ul className="capability-list" role="list">
        {portfolio.capabilities.map(([title, description], index) => (
          <li key={title}>
            <span>0{index + 1}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
